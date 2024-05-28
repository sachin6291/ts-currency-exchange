import { number, z } from 'zod'
import { CurrencyCodeSchema, CurrencyCodesSchema } from '../schema/currency-exchange-schema'

export type CurrencyCode = z.infer<typeof CurrencyCodeSchema>
export type CurrencyCodes = z.infer<typeof CurrencyCodesSchema>
export type CurrencyName = string
