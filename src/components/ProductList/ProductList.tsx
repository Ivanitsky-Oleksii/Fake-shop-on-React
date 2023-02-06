import { Grid, Typography } from "@mui/material"
import ProductListItem from "./ProductListItem"
import productsArray from "utils/productsArray"


type Props = {}

type ProductProps = {
    title: string
    descriptions: string
    type: string
    capacity: string
    price:number}



const ProductList = (props: Props) => {
return (
    <>
        <Typography variant="h4" align="center" component="h2">
            Product List
        </Typography>

        <Grid container spacing={3}>
            {productsArray.map((product: ProductProps) => (
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title={product.title}
                        descriptions={product.descriptions}
                        type={product.type}
                        capacity={product.capacity}
                        price={product.price}
                    />
                </Grid>
            ))}
        </Grid>
    </>
)
}
export default ProductList