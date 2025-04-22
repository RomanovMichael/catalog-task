<template>
  <nuxt-link
    :to="product.url"
    class="block group hover:shadow-lg rounded-lg overflow-hidden transition-all border border-gray-100"
  >
    <img
      :src="product.image"
      :alt="product.name"
      class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
    >

    <div class="p-4 space-y-1">
      <h2 class="font-semibold text-lg">{{ product.name }}</h2>
      <p class="text-caption text-sm">{{ product.brand }}</p>

      <div class="text-brand font-bold">
        {{ formatPrice(product.newPrice) }} ₽
      </div>

      <div
        v-if="product.oldPrice"
        class="text-sm line-through text-caption"
      >
        {{ formatPrice(product.oldPrice) }} ₽
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import { formatPrice } from '~/utils/format'
import type { Product } from '~/types/product'

const product = defineProps<Product>()
</script>
