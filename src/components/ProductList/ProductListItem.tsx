import {Card, CardContent, Button,TextField, CardActions} from '@mui/material'
import {Component} from 'react'
import './ProductListItem.scss'
import { useState } from 'react'

type Props = {
    title: string
    descriptions: string
    type: string
    capacity: string
    price:number
    image:string
}
const ProductListItem =({
            title,
            descriptions,
            type,
            capacity,
            price,
            image,
}: Props) => {

const [count,setCount] = useState<number>(1)

const onIncrement = () => {
    setCount (count + 1)
}
const onDecrement = () => {
    setCount (count - 1)
}

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
                <Button variant='outlined' onClick={() => onDecrement() }>-</Button>
                <TextField size='small' value={count} />
                <Button variant='outlined' onClick={() => onIncrement() } >+</Button>
            </div>
        </CardContent>
        <CardActions className="product-btn-wrap">
            <Button variant="outlined">Add to cart</Button>
        </CardActions>
    </Card>
)
}
export default ProductListItem