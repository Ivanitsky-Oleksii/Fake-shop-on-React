import Main from "container/Main/Main"
import Header from "container/Header/Header"
import Footer from "container/Footer/Footer"
import CssBaseline from '@mui/material/CssBaseline';




type Props = {}

const App = (props: Props) => {
  return (
    <>
    <CssBaseline/>
    <Header />
    <Main />
    <Footer />
    </>
  )
}
export default App