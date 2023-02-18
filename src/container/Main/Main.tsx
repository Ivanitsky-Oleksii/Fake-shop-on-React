import Home from 'pages/Home/Home'
import { Container } from '@mui/system'

type Props = {
    addProductToCart:(count:number,price:number) => void

}
const Main = ({addProductToCart}: Props) => {
return (
    <Container 
    sx={{
        padding: '60px 0',
    }}>
    <Home addProductToCart={addProductToCart} />
    </Container>
)
}
export default Main