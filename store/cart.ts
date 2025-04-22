// stores/cart.ts
import { defineStore } from 'pinia'
import type { Product } from '~/types/product'
import { loadFromStorage, saveToStorage } from '~/utils/storage'

const STORAGE_KEY = 'cart'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Product[]>(loadFromStorage<Product[]>(STORAGE_KEY) || [])

  const addToCart = (product: Product) => {
    if (!cart.value.find(p => p.url === product.url)) {
      cart.value.push(product)
      saveToStorage(STORAGE_KEY, cart.value)
    }
  }

  const removeFromCart = (url: string) => {
    cart.value = cart.value.filter(p => p.url !== url)
    saveToStorage(STORAGE_KEY, cart.value)
  }

  const clearCart = () => {
    cart.value = []
    saveToStorage(STORAGE_KEY, cart.value)
  }

  const total = computed(() =>
    cart.value.reduce((sum, item) => sum + item.newPrice, 0),
  )

  const cartCount = computed(() => cart.value.length)

  return { cart, cartCount, addToCart, removeFromCart, clearCart, total }
})
