import { Product } from "utils/productsArray"

type Props = {
    productCount:number
    product:Product
}

const CartProductListItem = ({productCount,product}:Props) => {
    return(
        <div>
            {product.title}: {productCount}
        </div>
    )
}
export default CartProductListItem