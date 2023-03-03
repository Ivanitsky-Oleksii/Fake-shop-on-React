import { Typography,Card, CardContent, TextField, TextareaAutosize, Button } from "@mui/material"
import { useState } from "react"

type Props = {
}
type Reviews={
    name:string
    text:string
}
type Review={
    name:string
    text:string
}
const Reviews = (props: Props) => {
    const arrReviews: Reviews[] = [
        {
            name: 'Ольга',
            text: 'Брали телефон чоловіку. Дуже задоволений!! Варто брати, якщо ви хочете обновити свій наприклад 8й чи 11й айфон '},
        {   name: 'Макс',
            text: 'B характеристиках указано, что в телефоне есть вспышка и стерозвук (как будто 2002 год на дворе), но очередной раз эпплы забыли упомянуть объём батарей.',
        },
    ]
    const [reviews,setReviews]=useState<Reviews[]>(arrReviews)
    const [newReview,setNewReview]=useState<Review>({
        name:"",
        text:"",
    })
    const handelName=(e:React.ChangeEvent<HTMLInputElement>) => {
setNewReview((prevState)=>({
    ...prevState,
    name:e.target.value,
}))
}
const handelText=(e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview((prevState)=>({
        ...prevState,
        text:e.target.value,
    }))
    }
const onSend = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newReview.name ==="" || newReview.text ==="" ){
    alert("All fields are required!")}
    else{
        setNewReview({
            name:"",
            text:"",
        })
        setReviews((prevState)=> {
            return [...prevState,newReview]
        })
    }
}

    return (
        <>
        <Typography variant="h4" component="h2" sx={{margin:"60px 0"}} >
            Reviews
        </Typography>
        <div>
            {
                reviews.map((item,i)=>(
                <Card variant="outlined" sx={{margin:"20px 0"}} key={i}>
                <CardContent>
                <div>{item.name}:</div>
                <div>{item.text}</div>
                </CardContent>
                </Card>
            ))}
        </div>
<form onSubmit={onSend}>
    <h3>Please leave a reviews</h3>
    <div>
        <TextField label="Name" value={newReview.name} onChange={handelName}/>
    </div>
    <br />
    <div>
        <TextareaAutosize minRows={6} placeholder="Text" style={{width:224}} value={newReview.text} onChange={handelText}/>
    </div>
    <Button variant="contained" type="submit">Send</Button>
    </form>



        </>
    )
}
export default Reviews