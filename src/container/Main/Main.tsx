import Home from 'pages/Home/Home'
import { Container } from '@mui/system'

type Props = {}
const Main = (props: Props) => {
return (
    <Container 
    sx={{
        padding: '60px 0',
    }}>
    <Home />
    </Container>
)
}
export default Main