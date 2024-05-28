import { useEffect } from "react"
import Header from "./components/Header"
import { useCurrencyExchangeStore } from "./store"

function App() {
const {fetchCurrency}= useCurrencyExchangeStore()
useEffect(()=>{fetchCurrency()},[])

  return (
    <>
      <Header/>
    </>
  )
}

export default App
