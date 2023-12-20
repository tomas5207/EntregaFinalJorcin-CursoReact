import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import {useGetProducts} from '../hooks/useProducts';

export const Home = () => {

    const {productsData} = useGetProducts();

return (
    <ItemListContainer greeting="Bienvenido a E-card.com" productsData={productsData}/>
)
}

export default Home
