import { Grid, Typography } from "@mui/material"
import ProductListItem from "./ProductListItem"


type Props = {}
const ProductList = (props: Props) => {
return (
    <>
        <Typography variant="h4" align="center" component="h2">
            Product List
        </Typography>

        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                {''}
                <ProductListItem />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                {''}
                <ProductListItem />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                {''}
                <ProductListItem />
            </Grid>
        </Grid>
    </>
)
}
export default ProductList