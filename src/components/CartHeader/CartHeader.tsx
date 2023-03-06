import CartTotal from "components/CartTotal/CartTotal"
import CartProductList from "components/CartProductList/CartProductList"
import { useAppSelector } from "redux/hook"

type Props = {
    productsInCart?:{
        [id:number]:number
    }

}

const CartHeader = () => {

    const productsInCart = useAppSelector ((state)=>state.productsInCart)
    return (
<div>
<CartProductList productsInCart={productsInCart}/>
<CartTotal productsInCart={productsInCart}/>


        </div>
        
    )
} 
export default CartHeader