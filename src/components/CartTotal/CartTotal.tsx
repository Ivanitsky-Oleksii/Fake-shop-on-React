import  { getProductsObject, Product } from "utils/productsArray"
import { useAppSelector } from "redux/hook"
type productsObject = {
    [id:number]:Product
}

type Props = {
    productsInCart:{
        [id:number]:number
    }

}

const CartTotal = ({productsInCart}: Props) => {
    const productsArray = useAppSelector(state => state.products)
    const productsObject : productsObject = getProductsObject(productsArray)
    
    return(
        <div>Total: {Object.keys(productsInCart).reduce((total,productId)=>(total + productsObject[parseInt(productId)].price * productsInCart[parseInt(productId)] ),0)}$</div>
        )
    }
    export default CartTotal