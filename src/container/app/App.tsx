import Main from "container/Main/Main"
import Header from "container/Header/Header"
import Footer from "container/Footer/Footer"
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';



type Props = {}

const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
    <CssBaseline/>
    <Header />
    <Main />
    <Footer />
    </StyledEngineProvider>
  )
}
export default App