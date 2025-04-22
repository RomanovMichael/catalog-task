import { generateFakeProduct } from '~/utils/generate'

export default defineEventHandler((event) => {
  const id = event.context.params?.id
  return generateFakeProduct(id)
})
