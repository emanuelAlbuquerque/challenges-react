import { z } from 'zod'
import { v4 as uuid } from 'uuid';

export const productsSchema = z.object({
  id: z.string().uuid().optional().default(uuid),
  name: z.string(),
  price: z.string(),
  img: z.string(),
  quantify: z.string()
    .min(0, { message: 'A quantidade precisa ser maior que 0' })
    .max(10, { message: 'A quantidade não pode utrapassar 10 unidades.' })
})

export type products = z.infer<typeof productsSchema>

export let productsCart: products[] = []