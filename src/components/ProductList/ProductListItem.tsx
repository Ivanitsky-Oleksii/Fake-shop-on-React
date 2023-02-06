import {Card, CardContent, Button, CardActions} from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    descriptions: string
    type: string
    capacity: string
    price:number
}
const ProductListItem = ({
    title,
    descriptions,
    type,
    capacity,
    price,
}: Props) => {
return (
    <Card variant="outlined" className="product">
        <CardContent>
            <div className="product-title">{title}</div>
            <div className="product-desc">{descriptions}</div>
            <div className="product-features">{type}</div>
            <div className="product-features">{capacity}</div>
            <div className="product-price">{price}$</div>
        </CardContent>
        <CardActions className="product-btn-wrap">
            <Button variant="outlined">Add to cart</Button>
        </CardActions>
    </Card>
)
}
export default ProductListItem