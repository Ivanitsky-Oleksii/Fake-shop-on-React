import ProductList from "components/ProductList/ProductList"

type Props = {
    addProductToCart:(count:number,price:number) => void
}
const Home = ({addProductToCart}: Props) => {
return (
    <div>
<ProductList addProductToCart={addProductToCart}/>


    </div>
)
}
export default Home