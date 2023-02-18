import Main from "container/Main/Main"
import Header from "container/Header/Header"
import Footer from "container/Footer/Footer"
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { useState } from "react";

type Props = {}

type ProductsInCart = {
[id:number]:number}

const App = (props: Props) => {
const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
1:5,
2:5,
3:7
})

const addProductToCart = (count:number,price:number) => {}
  return (
    <StyledEngineProvider injectFirst>
    <CssBaseline/>
    <Header productsInCart={productsInCart} />
    <Main addProductToCart={addProductToCart}/>
    <Footer />
    </StyledEngineProvider>
  )
}
export default App