import {Card, CardContent, Button,TextField, CardActions} from '@mui/material'
import {Component} from 'react'
import './ProductListItem.scss'

type Props = {
    title: string
    descriptions: string
    type: string
    capacity: string
    price:number
    image:string
}

class ProductListItem extends Component<Props> {
    render (){
    return (
    <Card variant="outlined" className="product">
        <CardContent>
            <div className='product-img'><img src={this.props.image} alt="fake shop" /> </div>
            <div className="product-title">{this.props.title}</div>
            <div className="product-desc">{this.props.descriptions}</div>
            <div className="product-features">Type:{this.props.type}</div>
            <div className="product-features">Capacity:{this.props.capacity}Gb</div>
            <div className="product-price">{this.props.price}$</div>
            <div className='product-quantity'>
                <Button variant='outlined'>-</Button>
                <TextField size='small' value="1"/>
                <Button variant='outlined'>+</Button>
            </div>
        </CardContent>
        <CardActions className="product-btn-wrap">
            <Button variant="outlined">Add to cart</Button>
        </CardActions>
    </Card>
)
}}
export default ProductListItem