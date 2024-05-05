import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCurrencyCode } from "./services/CurrencyExchangeService";

type CurrencyExchangeStore={
    fetchCurrency: () => Promise<void>
}
export const useCurrencyExchangeStore = create<CurrencyExchangeStore>()(devtools(()=>({
    fetchCurrency: async ()=>{
        // const currencyCode = await getCurrencyCode()
        await getCurrencyCode()
    }
})))