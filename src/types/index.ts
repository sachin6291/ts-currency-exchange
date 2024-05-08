import { z } from 'zod'
import { CurrencyCodeSchema } from '../schema/currency-exchange-schema'

export type CurrencyCode = z.infer<typeof CurrencyCodeSchema>