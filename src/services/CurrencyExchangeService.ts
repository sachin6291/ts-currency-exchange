import axios from "axios";

const appId= import.meta.env.VITE_API_KEY

export const getCurrencyCode = async()=>{
    const url = `https://api.currencyapi.com/v3/currencies?apikey=${appId}&currencies=`
    const {data: {data}} = await axios(url)
    console.log(Object.entries(data))
    const arrayCurrency = Object.entries(data).map(([code, currency])=>{
        console.log(code, currency);
    }) 
    
}