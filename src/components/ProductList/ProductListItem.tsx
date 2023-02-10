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

type State ={
    count:number
}

class ProductListItem extends Component<Props, State> {

constructor(props:Props){
    super(props)
    this.state={
        count:1,
    }
    this.onIncrementClick=this.onIncrementClick.bind(this)
}

onIncrementClick(){
    console.log(this)
    this.setState({
        count:2
    })
}

    render (){
        const{
            title,
            descriptions,
            type,
            capacity,
            price,
            image,
        } = this.props;
    return (
    <Card variant="outlined" className="product">
        <CardContent>
            <div className='product-img'><img src={image} alt="fake shop" /> </div>
            <div className="product-title">{title}</div>
            <div className="product-desc">{descriptions}</div>
            <div className="product-features">Type:{type}</div>
            <div className="product-features">Capacity:{capacity}Gb</div>
            <div className="product-price">{price}$</div>
            <div className='product-quantity'>
                <Button variant='outlined'>-</Button>
                <TextField size='small' value={this.state.count} />
                <Button variant='outlined' onClick={this.onIncrementClick}>+</Button>
            </div>
        </CardContent>
        <CardActions className="product-btn-wrap">
            <Button variant="outlined">Add to cart</Button>
        </CardActions>
    </Card>
)
}}
export default ProductListItem