import {Card, CardContent, Button,CardActions} from '@mui/material'
import './ProductListItem.scss'
import { useState } from 'react'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    id: number
    title: string
    descriptions: string
    type: string
    capacity: string
    price:number
    image:string
    addProductToCart:(count:number,price:number) => void
}
const ProductListItem =({
            id,
            title,
            descriptions,
            type,
            capacity,
            price,
            image,
            addProductToCart
}: Props) => {

    
const [count,setCount] = useState<number>(1)

const onIncrement = () => {
    setCount ((prevState) => prevState + 1)
}
const onDecrement = () => {

    setCount ((prevState) => prevState - 1)
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
            <Quantity count={count} onDecrement={onDecrement} onIncrement={onIncrement}/>
        </CardContent>
        <CardActions className="product-btn-wrap">
            <Button variant="outlined" onClick={() => addProductToCart(id,count)}>Add to cart</Button>
        </CardActions>
    </Card>
)
}
export default ProductListItem