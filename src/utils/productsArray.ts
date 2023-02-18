export type Product = {
    id:number
    title: string
    descriptions: string
    type: string
    capacity: string
    price: number
    image:string
}

const productsArray: Product[] = [
    {
        id:1,
        title: 'iPhone 14 Pro',
        descriptions: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1200,
        image:"/images/gold.webp"
    },
    {
        id:2,
        title: 'iPhone 13 Pro',
        descriptions: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '128',
        price: 1000,
        image:"/images/black.webp"
    },
    {
        id:3,
        title: 'iPhone 12 Pro',
        descriptions: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '64',
        price: 800,
        image:"/images/blue.webp"
    },
    {
        id:4,
        title: 'iPhone 11 Pro',
        descriptions: 'This is iPhone 11 Pro',
        type: 'phone',
        capacity: '32',
        price: 500,
        image:"/images/purple.webp"
    },
    {
        id:5,
        title: 'iPhone 15 Pro Max',
        descriptions: 'This is iPhone 15 Pro Max',
        type: 'phone',
        capacity: '512',
        price: 1500,
        image:"/images/red.webp"
    },
    {
        id:6,
        title: 'iPhone 10 Pro',
        descriptions: 'This is iPhone 10 Pro',
        type: 'phone',
        capacity: '64',
        price: 450,
        image:"/images/white.webp"
    },
]



export const getProductsObject = (array:Product[]) =>
array.reduce((object,product) => ({...object,[product.id]:product,}),{})

export default productsArray