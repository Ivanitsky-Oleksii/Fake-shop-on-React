import Header from "container/Header/Header"
import Footer from "container/Footer/Footer"
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { useEffect, useState } from "react";
import {Route,Routes} from 'react-router-dom'
import {Container} from '@mui/system'
import Home from "pages/Home/Home";
import CartPage from "pages/Cart/CartPage";
import {omit} from 'lodash'
import CheckoutPage from "pages/Checkout/CheckoutPage";
import { useAppDispatch } from "redux/hook";
import { fetchProducts } from "redux/productsReducer";

type Props={}

const App = (props: Props) => {
const dispatch = useAppDispatch()
useEffect(()=>{
  dispatch(fetchProducts())
})
  return (
    <StyledEngineProvider injectFirst>
    <CssBaseline/>
    <Header  />
    <Container  sx={{
        padding: '60px 0',
    }}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='checkout' element={<CheckoutPage/>}/>
      <Route path="cart" element={<CartPage/>}/>
    </Routes>
    </Container>
    <Footer />
    </StyledEngineProvider>
  )
}
export default App