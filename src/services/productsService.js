import axios from 'axios';


export async function getProducts(){
    return await axios.get('https://apireact.wabit.cl/api/tomas/products')
}