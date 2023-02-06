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
                <ProductListItem
                    title="iPhone 14 Pro"
                    descriptions="This is iPhone 14 Pro"
                    type="phone"
                    capacity="256"
                    price={1200}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                {''}
                <ProductListItem
                    title="iPhone 13 Pro"
                    descriptions="This is iPhone 13 Pro"
                    type="phone"
                    capacity="256"
                    price={1000}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                {''}
                <ProductListItem
                    title="iPhone 12 Pro"
                    descriptions="This is iPhone 12 Pro"
                    type="phone"
                    capacity="256"
                    price={900}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                {''}
                <ProductListItem
                    title="iPhone 11 Pro"
                    descriptions="This is iPhone 11 Pro"
                    type="phone"
                    capacity="256"
                    price={700}
                />
            </Grid>
        </Grid>
    </>
)
}
export default ProductList