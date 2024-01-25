import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import {useGetProductsByCategory} from '../hooks/useProducts';
import { useParams } from 'react-router-dom';

export const Category = () => {

    const {id} = useParams();
    const {productsData} = useGetProductsByCategory(id);

    return (
        <ItemListContainer greeting="Bienvenido a E-cards.com" productsData={productsData}/>
    )
}

export default Category