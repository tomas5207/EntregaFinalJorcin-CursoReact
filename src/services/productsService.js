import axios from 'axios';


export async function getProducts(){
    return await axios.get('https://apireact.wabit.cl/api/tomas/products')
}

export async function getProductsById(id){
    return await axios.get(`https://apireact.wabit.cl/api/tomas/products/${id}`)
}

export async function getCategories(){
    return await axios.get(`https://apireact.wabit.cl/api/tomas/categories`)
}

export async function getProductsByCategory(id){
    return await axios.get(`https://apireact.wabit.cl/api/$tomas/products/category/${id}`)
}