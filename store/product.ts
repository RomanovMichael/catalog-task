import { defineStore } from 'pinia'
import type { Product } from '~/types/product'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])

  const setProducts = (newProducts: Product[]) => {
    products.value = newProducts
  }

  const getById = (id: string | number) => {
    return products.value.find(p => p.url.endsWith(`/${id}`))
  }

  return { products, setProducts, getById }
})
