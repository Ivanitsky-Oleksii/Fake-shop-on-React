import CartTotal from "components/CartTotal/CartTotal"
import productsArray, { getProductsObject, Product } from "utils/productsArray"
import CartProductList from "components/CartProductList/CartProductList"

type Props = {
    productsInCart:{
        [id:number]:number
    }
productsObject?:{
    [id:number] : Product
}
}
const CartPage = ({productsInCart,productsObject = getProductsObject(productsArray)}: Props) => {
    return(
<div>
        <CartProductList productsInCart={productsInCart}/>
        <CartTotal productsInCart={productsInCart}/>

</div>
    )
}
export default CartPage