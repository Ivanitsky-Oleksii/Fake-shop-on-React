import CartTotal from "components/CartTotal/CartTotal"
import productsArray, { getProductsObject, Product } from "utils/productsArray"
import { Typography,Grid } from "@mui/material"
import CartProductList from "components/CartProductList/CartProductList"
import CartProductListItemExtended from "components/CartProductList/CartProductListItemExtended"

type Props = {
    productsInCart:{
        [id:number]:number
    }
    removeProductFromCart:(id:number)=>void
productsObject?:{
    [id:number] : Product
}
}
const CartPage = ({productsInCart,removeProductFromCart}: Props) => {
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
        removeProductFromCart={removeProductFromCart}
        />
        </Grid> 
        <CartTotal productsInCart={productsInCart}/>

</div>
    )
}
export default CartPage