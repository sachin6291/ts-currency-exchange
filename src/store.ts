import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCurrencyCode } from "./services/CurrencyExchangeService";
import { CurrencyCode } from "./types";

type CurrencyExchangeStore={
    currencyCode : CurrencyCode[]
    fetchCurrency: () => Promise<void>
}
export const useCurrencyExchangeStore = create<CurrencyExchangeStore>()(devtools((set)=>({
    currencyCode: [] as CurrencyCode[],
    fetchCurrency: async ()=>{
        const currencyCode = await getCurrencyCode()
        if(currencyCode?.length !== 0 ){
            set(()=>({currencyCode})); 
        }
    }
})))