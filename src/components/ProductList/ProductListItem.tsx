import {Card, CardContent, Button,CardActions} from '@mui/material'
import './ProductListItem.scss'
import { useState } from 'react'
import Quantity from 'components/Quantity/Quantity'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAppDispatch, useAppSelector } from 'redux/hook';
import { addLike, removeLike } from 'redux/likeReducer';
import { addProductToCart } from 'redux/cartReducer';

type Props = {
    id: number
    title: string
    descriptions: string
    type: string
    capacity: string
    price:number
    image:string
    addProductToCart?:(count:number,price:number) => void
}
const ProductListItem =({
            id,
            title,
            descriptions,
            type,
            capacity,
            price,
            image,
}: Props) => {

    
const [count,setCount] = useState<number>(1)

const onIncrement = () => {
    setCount ((prevState) => prevState + 1)
}
const onDecrement = () => {

    setCount ((prevState) => prevState - 1)
}
const isLiked = useAppSelector((state) => state.productsLikeState[id])
const dispatch = useAppDispatch()

    return (
    <Card variant="outlined" className="product">
        <CardContent>
            <Button variant='outlined' onClick={()=> isLiked ? dispatch(removeLike(id)): dispatch(addLike(id))}>
            {isLiked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </Button>
            <div className='product-img'><img src={image} alt="fake shop" /> </div>
            <div className="product-title">{title}</div>
            <div className="product-desc">{descriptions}</div>
            <div className="product-features">Type:{type}</div>
            <div className="product-features">Capacity:{capacity}Gb</div>
            <div className="product-price">{price}$</div>
            <Quantity count={count} onDecrement={onDecrement} onIncrement={onIncrement}/>
        </CardContent>
        <CardActions className="product-btn-wrap">
            <Button variant="outlined" onClick={() => dispatch(addProductToCart({
            id,
            count    
            }))}>Add to cart</Button>
        </CardActions>
    </Card>
)
}
export default ProductListItem