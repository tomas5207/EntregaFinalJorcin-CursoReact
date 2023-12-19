import {useState, useEffect} from "react";
import { getProducts } from "../services";

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