import { Grid, Card, CardContent, Button,CardActions } from "@mui/material"
import { Product } from "utils/productsArray"
import DeleteIcon from '@mui/icons-material/Delete'


type Props = {
    productCount:number
    product:Product
    removeProductFromCart:(id:number)=>void
}

const CartProductListItemExtended = ({product,productCount,removeProductFromCart}:Props) => {
    return(
        <Grid item xs={12} sm={4}>
<Card>
    <CardContent>
        <div className="product-image">
            <img src={product.image} alt=""/>
        </div>
        <div>{product.title}</div>
        <p>Price for one item: {product.price}</p>
        <p>Count:{productCount}</p>
    </CardContent>
    <CardActions>
    <Button variant="outlined" onClick={() => removeProductFromCart(product.id)}>
        <DeleteIcon/>
    </Button>
    </CardActions>

</Card>

        </Grid>
    )
}
export default CartProductListItemExtended