import ProductList from "components/ProductList/ProductList"
import Reviews from "components/Reviews/Reviews"

type Props = {
    addProductToCart:(count:number,price:number) => void
}
const Home = ({addProductToCart}: Props) => {
return (
    <div>
<ProductList addProductToCart={addProductToCart}/>
<Reviews/>


    </div>
)
}
export default Home