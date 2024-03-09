import "./globalicons.css"
import Link  from 'next/link';
import Image from 'next/image'
import { productIDMap } from './_productImageMap';
const { MongoClient, ServerApiVersion, Db, Collection } = require('mongodb');


interface productType {
  _id: string;
  name: string;
  price: Number
}

interface ProductCardProps {
  imageLocation: string;
}


const uri = process.env.DSN;

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: false,
      deprecationErrors: false,
    }
  });

  
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
async function findProduct(_productId: string) {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      const result: productType = await client.db(process.env.DBNAME).collection(process.env.PRODUCTCOLLECTION).findOne({_id: _productId })
      return result

    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }


const ProductCard: React.FC<ProductCardProps> = async ({imageLocation}) => {
  const path = `productImages/${imageLocation}`
  const prodID = productIDMap[imageLocation]
  const productDetails = await findProduct(prodID)
  return (
    <div>
        <div className="relative">
          <Link href="/product/[productName]" as={`/product/${productDetails.name.replace(/ /g, '-')}`}>
          <Image 
          src={`/${path}/thumbnail.jpg`}
          alt="Kord Obsidian Sengakuji Keycap"
          objectFit="cover"
          className="transition-all duration-500
           ease-in-out transform hover:scale-95 hover:opacity-75"
          height={300}
          width={300}
          />
          </Link>
        </div>

        <div className="text-lg">
          {productDetails.name}
        </div>
        <div className="text-sm">
          {`$${productDetails.price}`}
        </div>
    </div>
  );
};

export default ProductCard;
