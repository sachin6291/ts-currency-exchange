import { useEffect, useState } from "react"
import { useCurrencyExchangeStore } from "../store"
import { CurrencyCodes } from "../types"

const Form = () => {
    const [code, setCode] = useState<CurrencyCodes>()
    const { currencyCode, fetchCurrency } = useCurrencyExchangeStore()
    useEffect(()=>{fetchCurrency()},[])
    useEffect(()=>{setCode(currencyCode)},[currencyCode])
    console.log(code)
    return (
        <div>Form</div>
    )
}

export default Form