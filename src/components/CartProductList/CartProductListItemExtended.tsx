import { Grid, Card, CardContent, Button,CardActions } from "@mui/material"
import { Product } from "utils/productsArray"
import DeleteIcon from '@mui/icons-material/Delete'
import {removeProductFromCart} from 'redux/cartReducer'
import {changeProductQuantity} from 'redux/cartReducer'
import { useAppDispatch } from "redux/hook"
import Quantity from "components/Quantity/Quantity"


type Props = {
    productCount:number
    product:Product
    removeProductFromCart?:(id:number)=>void
    changeProductQuantity?:(id:number,count:number)=>void
}

const CartProductListItemExtended = ({
    product,
    productCount}
    :Props) => {
    const dispatch = useAppDispatch()
    
    
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
        <Quantity 
        count={productCount}
        onDecrement={()=> productCount <=1 ? 
            dispatch(removeProductFromCart(product.id)) :
            dispatch(changeProductQuantity({
                id:product.id,
                count:productCount-1
            }))}
        onIncrement={()=>dispatch(changeProductQuantity({
            id:product.id,
            count:productCount+1
        }))}
        minCount={0}
        />
    </CardContent>
    <CardActions>
    <Button variant="outlined" onClick={() => dispatch(removeProductFromCart(product.id))}>
        <DeleteIcon/>
    </Button>
    </CardActions>

</Card>

        </Grid>
    )
}
export default CartProductListItemExtended