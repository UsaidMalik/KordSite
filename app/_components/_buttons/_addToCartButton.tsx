import AdderToCart from "./_adderToCart"

interface AddToCartProps{
    price: string,
    quantity: number
}
const AddToCart: React.FC<AddToCartProps>  = ({price, quantity})  => {
    
    return (

    <div>
        <AdderToCart price={price} quantity={quantity}/>
    </div>
    )
}

export default AddToCart