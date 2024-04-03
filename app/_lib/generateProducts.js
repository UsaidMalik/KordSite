import fs from 'fs';
import path from 'path';

function getImages(productImageDir) { 
    const imagePath = `productImages/${productImageDir}`
    const dir = path.resolve('./public', imagePath);
    let imagePaths= []

    imagePaths = fs.readdirSync(dir).map((paths) => {
        return `${imagePath}/${paths}`
    })
    console.log(imagePaths)
    return imagePaths
}


const products = {
    "Obsidian-Sengakuji" : {
        price: 25.95,
        description: "nothing to see here",
        imageDirectoryName: "Obsidian-Sengakuji",
        imagePaths: [],
        thumbnailName: "Obsidian Sengakuji",
        stripeID: "price_1OvbqFIajtiRYLJ07eeC9npD",
        productFullName: "Obsidian Sengakuji Artisan Keycap",

    }
}

console.log("generating products")

Object.keys(products).forEach((productName) => {
  const product = products[productName];
  product.imagePaths = getImages(product.imageDirectoryName);
});

console.log(products)
const filePath = "C:/Users/Usaid/Projects/kordsite/data/products.JSON"
console.log(filePath)

fs.promises.writeFile(filePath, JSON.stringify(products));
console.log('Products generated.');
