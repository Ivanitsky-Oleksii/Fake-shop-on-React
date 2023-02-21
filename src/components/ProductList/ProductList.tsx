import { Grid, Typography } from "@mui/material"
import ProductListItem from "./ProductListItem"
import productsArray from "utils/productsArray"


type Props = {
    addProductToCart:(count:number,price:number) => void
}

const ProductList = ({addProductToCart}: Props) => {
return (
    <>
        <Typography variant="h4" align="center" component="h2">
            Product List
        </Typography>

        <Grid container spacing={3}>
            {productsArray.map(({id,title,descriptions,type,capacity,price,image}) => (
                <Grid item xs={12} sm={6} md={4} key={id}>
                    <ProductListItem 
                        id={id}
                        addProductToCart={addProductToCart}
                        title={title}
                        descriptions={descriptions}
                        type={type}
                        capacity={capacity}
                        price={price}
                        image={image}
                    />
                </Grid>
            ))}
        </Grid>
    </>
)
}
export default ProductList