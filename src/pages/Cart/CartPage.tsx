import CartTotal from "components/CartTotal/CartTotal"
import { Typography,Grid } from "@mui/material"
import CartProductList from "components/CartProductList/CartProductList"
import CartProductListItemExtended from "components/CartProductList/CartProductListItemExtended"
import { useAppSelector } from "redux/hook"
import { Link } from "react-router-dom"

const CartPage = () => {
    
    const productsInCart = useAppSelector ((state)=> state.productsInCart)
    
    
    return(
<div>
<Typography variant="h4" component="h1" sx={{
    marginBottom:"30px"
}}>     Cart
        </Typography>  
        <Grid container spacing={4}>
        <CartProductList 
        productsInCart={productsInCart} 
        CartItem={CartProductListItemExtended}
        />
        </Grid> 
        <CartTotal productsInCart={productsInCart}/>
<Link to="/checkout">Proceed to checkout</Link>
</div>
    )
}
export default CartPage