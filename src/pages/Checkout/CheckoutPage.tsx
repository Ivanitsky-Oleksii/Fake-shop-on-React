import { Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"

type Props = {
}
type Order = {
    name:string,
    address:string

}
const CheckoutPage = (props:Props)=>{
const [isOrderSend, setIsOrderSend] = useState<boolean>(false)    

const [orderData,setOrderData] = useState<Order>({
    name:"",
    address:"",
})
const handelName = (e:React.ChangeEvent<HTMLInputElement>) => (
    setOrderData((prevState)=>
    ({
        ...prevState,
        name:e.target.value,
    })))

    const handelAddress = (e:React.ChangeEvent<HTMLInputElement>) => (
        setOrderData((prevState)=>
        ({
            ...prevState,
            address:e.target.value,
        })))

const orderSent = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    axios.post("https://my-json-server.typicode.com/kznkv-skillup/server/orders",{
        name:orderData.name,
        address:orderData.address,
    }).then((res) => res.data)
    .then (({name,address}) => {setOrderData ({
        name,
        address
    })
    setIsOrderSend(true)
})
}

const renderForm = () => {
    return(
        <form onSubmit={orderSent}>
            <div>
                <input type="text" placeholder="Your name" value={orderData.name} onChange={handelName} />
            </div>
            <div>
                <input type="text" placeholder="Your address" value={orderData.address} onChange={handelAddress} />
            </div>
            <button type="submit">Send</button>
        </form>
    )
}

const renderMessage = ()=>{
    return (
        <div>
            <div>Dear, {orderData.name} thanks for your order! </div>
            <div>Addres: {orderData.address}</div>
        </div>
    )
}


console.log (orderData)
    return (
    <>
    <Typography component={"h1"} variant="h4" sx={{margin:"0 0 40px 0"}}>
Checkout
    </Typography>
    {isOrderSend ? renderMessage() : renderForm()}
    </>
    )
}

export default CheckoutPage
