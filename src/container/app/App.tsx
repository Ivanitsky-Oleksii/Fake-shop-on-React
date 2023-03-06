import Header from "container/Header/Header"
import Footer from "container/Footer/Footer"
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { useState } from "react";
import {Route,Routes} from 'react-router-dom'
import {Container} from '@mui/system'
import Home from "pages/Home/Home";
import CartPage from "pages/Cart/CartPage";
import {omit} from 'lodash'

type Props={}

const App = (props: Props) => {

  return (
    <StyledEngineProvider injectFirst>
    <CssBaseline/>
    <Header  />
    <Container  sx={{
        padding: '60px 0',
    }}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="cart" element={
      <CartPage 
      />}/>
    </Routes>
    </Container>
    <Footer />
    </StyledEngineProvider>
  )
}
export default App