type ProductProps = {
    title: string
    descriptions: string
    type: string
    capacity: string
    price: number
}

const productsArray: ProductProps[] = [
    {
        title: 'iPhone 14 Pro',
        descriptions: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1200,
    },
    {
        title: 'iPhone 13 Pro',
        descriptions: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '128',
        price: 1000,
    },
    {
        title: 'iPhone 12 Pro',
        descriptions: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '64',
        price: 800,
    },
    {
        title: 'iPhone 11 Pro',
        descriptions: 'This is iPhone 11 Pro',
        type: 'phone',
        capacity: '32',
        price: 500,
    },
    {
        title: 'iPhone 15 Pro Max',
        descriptions: 'This is iPhone 15 Pro Max',
        type: 'phone',
        capacity: '512',
        price: 1500,
    },
    {
        title: 'iPhone 10 Pro',
        descriptions: 'This is iPhone 10 Pro',
        type: 'phone',
        capacity: '64',
        price: 450,
    },
]

export default productsArray