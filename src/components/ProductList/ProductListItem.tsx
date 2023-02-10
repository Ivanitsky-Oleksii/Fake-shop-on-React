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
    color:string
}

class ProductListItem extends Component<Props, State> {

state = {
    count:1,
    color:"green",
}

onIncrementClick=() => {
    this.setState((prevState:State) => ({
        count: prevState.count + 1,
    })
    )
}
onDecrementClick=() => {
    this.setState((prevState:State) => ({
        count: prevState.count -1,
    })
    )
}

changeColor=() =>{
    this.setState((prevState:State) => {
        if (prevState.color === "green") {
        return {
            color:"red",
        } 
    }   else {
            return {
                color:"green",
            }
        }
    
    } )
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
            <p>Color:{''}
            <span className={this.state.color}>{this.state.color}</span></p>
            <button onClick={this.changeColor}>Change color</button>
            <div className="product-price">{price}$</div>
            <div className='product-quantity'>
                <Button variant='outlined' onClick={this.onDecrementClick}>-</Button>
                <TextField size='small' value={this.state.count} />
                <Button variant='outlined' onClick={() => this.onIncrementClick ()}>+</Button>
            </div>
        </CardContent>
        <CardActions className="product-btn-wrap">
            <Button variant="outlined">Add to cart</Button>
        </CardActions>
    </Card>
)
}}
export default ProductListItem