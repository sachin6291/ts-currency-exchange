import { z } from 'zod'

export const CurrencyCodeSchema = z.object({
    id: z.string(),
    data: z.object({
        name : z.string(),
        type : z.string(),
        symbol : z.string()
    })
})

export const CurrencyCodesSchema = z.array(CurrencyCodeSchema)
