import {useState, useEffect} from "react";
import { getCategories, getProducts, getProductsByCategory, getProductsById } from "../services";

export const useGetProducts = () =>{
    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        getProducts()
        .then(response => {
        setProductsData(response.data)
        })
        .catch(error => {console.log(error)});
        }, [])

        return { productsData}
}

export const useGetProductsById = (id) =>{
    const [productData, setProductData] = useState([])
    
    useEffect(() => {
        getProductsById(id)
        .then(response => {
        setProductData(response.data[0])
        })
        .catch(error => {console.log(error)});
        }, [id])

        return { productData}
}

export const useGetCategories = () =>{
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then(response => {
        setCategories(response.data)
        console.log()
        })
        .catch(error => {console.log(error)});
        }, [])

        return {categories}
}

export const useGetProductsByCategory = (id) =>{
    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        getProductsByCategory(id)
        .then(response => {
        setProductsData(response.data)
        console.log(response.data);
        })
        .catch(error => {console.log(error)});
        }, [id])

        return { productsData}
}