// import { useState } from 'react'

// // type ExchangeCurrencyProp ={
// //     label:string
// //     arrayCurrency:Array
// // }

// const useExangeCurrency = (label, arrayCurrency) => {

//     const[state, setState] = useState("")


//     const CurrencyList = ()=>(
//         <>
//             <label className='text-white block text-2xl font-bold mx-4'>
//                 {label}
//             </label>
//             <select 
//                 className='text-xl w-full ml-5 p-4 rounded-lg' 
//                 value={state}
//                 onChange={e=>setState(e.target.value)}    
//             >
//                 <option value=''>Select</option>
//                 {(arrayCurrency)?(arrayCurrency.map(option=>(
//                     <option
//                     key={option.id}
//                     value={option.id}>{option.name}</option>
//                 ))):null}  
//             </select>
//         </>
//     )
//     return[state, CurrencyList]
// }

// export default useExangeCurrency