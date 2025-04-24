<script setup lang="ts">
import { useCartStore } from '~/store/cart'
import { formatPrice } from '~/utils/format'

const cartStore = useCartStore()
</script>

<template>
  <section class="page-cart w-full py-10">
    <ui-container>
      <h1 class="text-2xl font-bold mb-6">
        Корзина
      </h1>
      <div
        v-if="cartStore.cartCount === 0"
        class="text-center text-caption"
      >
        Корзина пуста
      </div>
      <div
        v-else
        class="space-y-6"
      >
        <div
          v-for="product in cartStore.cart"
          :key="product.url"
          class="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-20 h-20 object-cover rounded"
          >

          <div class="flex-1">
            <h2 class="text-lg font-semibold">
              {{ product.name }}
            </h2>
            <p class="text-caption">
              {{ product.brand }}
            </p>
            <p class="text-brand font-semibold">
              {{ formatPrice(product.newPrice) }} ₽
            </p>
          </div>

          <button
            class="text-sm text-red-600 hover:underline"
            @click="cartStore.removeFromCart(product.url)"
          >
            Удалить
          </button>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <div class="text-lg font-semibold">
            Итого: {{ formatPrice(cartStore.total) }} ₽
          </div>

          <button
            class="text-sm text-caption hover:underline"
            @click="cartStore.clearCart"
          >
            Очистить корзину
          </button>
        </div>
      </div>
    </ui-container>
  </section>
</template>
