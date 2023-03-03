import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'
import './Menu.scss'
import MenuItem from './MenuItem'

type Props = {
}
const linkStyle = {textDecoration: 'none', 
color:"white"
}

const Menu = (props: Props) => {
    return (
        <>
    <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/payment">Payment</MenuItem>
            <MenuItem to="/shipping">Shipping</MenuItem>
            <MenuItem to="/cart">Cart</MenuItem>
    </>
    )
}
export default Menu
