import {Card, CardContent, Button, CardActions} from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    descriptions: string
    type: string
    capacity: string
    price:number
}
const ProductListItem = (props: Props) => {
return (
    <Card variant="outlined" className="product">
        <CardContent>
            <div className="product-title">{props.title}</div>
            <div className="product-desc">{props.descriptions}</div>
            <div className="product-features">{props.type}</div>
            <div className="product-features">{props.capacity}</div>
            <div className="product-price">{props.price}</div>
        </CardContent>
        <CardActions className="product-btn-wrap">
            <Button variant="outlined">Add to cart</Button>
        </CardActions>
    </Card>
)
}
export default ProductListItem