import axios from "axios";
import { CurrencyCodesSchema } from "../schema/currency-exchange-schema";

const appId= import.meta.env.VITE_API_KEY

export const getCurrencyCode = async()=>{
    const url = `https://api.currencyapi.com/v3/currencies?apikey=${appId}&currencies=`
    
    const {data: {data}} = await axios(url)

    const arrayCurrency = CurrencyCodesSchema.safeParse(Object.entries(data).map(([code, currency])=>{
      return{
          id : code,
          data : currency
      }
    }))

    if(arrayCurrency.success){
        return arrayCurrency.data
    }
}


    // try {
    //     const response = await axios.get(url);
    //     const data = response.data.data;
    
    //     const arrayCurrency = CurrencyCodesSchema.safeParse(
    //       Object.entries(data).map(([code, currency]) => {
    //         return {
    //           id: code,
    //           data: currency,
    //         }
    //       })
    //     )
    
    //     if (arrayCurrency.success) {
    //       return arrayCurrency.data;
    //     } else {
    //       throw new Error("Schema validation failed");
    //     }
    //   } catch (error: any) {
    //     if (error.response && error.response.status === 429) {
    //       console.error("Rate limit exceeded. Please try again later.");
    //       // Implement retry logic with delay or other rate-limiting strategies.
    //     } else {
      //       console.error("An error occurred:", error.message);
      //     }
      //     throw error; // Re-throw error if needed for further handling
      //   }
      // };