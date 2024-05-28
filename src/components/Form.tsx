import { useEffect, useState } from "react"
import { useCurrencyExchangeStore } from "../store"
import { CurrencyCodes, CurrencyName } from "../types"



const Form = () => {
    const [code, setCode] = useState<CurrencyCodes>([])
    const [fromState, setFromState] = useState<CurrencyName>("")
    const [toState, setToState] = useState<CurrencyName>("")
    const { currencyCode } = useCurrencyExchangeStore()
    console.log(code)
    useEffect(()=>{setCode(currencyCode)},[currencyCode])
    
    const currencyArray=code.map(currency=>{
        if(currency.data.type === "fiat" ){
            return{
                id: currency.id,
                name: currency.data.name,
                symbol: currency.data.symbol
            }
        }
    })
    // console.log(currencyArray)

    return (
        <div>
            <label className='text-white block text-2xl font-bold mx-4'>                
            From:
            </label>
            <select 
                className='text-xl w-full ml-5 p-4 rounded-lg' 
                value={fromState}
                onChange={e=>setFromState(e.target.value)}    
            >
                <option value=''>Select</option>
                {(currencyArray)?(currencyArray.map(option=>(
                    <option
                    key={option?.id}
                    value={option?.id}>{option?.name}</option>
                ))):null}  
            </select>

            <label className='text-white block text-2xl font-bold mx-4'>                
            To:
            </label>
            <select 
                className='text-xl w-full ml-5 p-4 rounded-lg' 
                value={toState}
                onChange={e=>setToState(e.target.value)}    
            >
                <option value=''>Select</option>
                {(currencyArray)?(currencyArray.map(option=>(
                    <option
                    key={option?.id}
                    value={option?.id}>{option?.name}</option>
                ))):null}  
            </select>
        </div>
    )
}

export default Form