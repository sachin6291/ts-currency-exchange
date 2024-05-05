import { useCurrencyExchangeStore } from "../store"

const Header = () => {
  const { fetchCurrency } = useCurrencyExchangeStore()
  fetchCurrency()
  return (
    <div className="text-xl">Header</div>
  )
}

export default Header