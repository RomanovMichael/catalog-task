<script setup lang="ts">
import type { Product } from '~/types/product'

defineProps<Product>()
</script>

<template>
  <div class="product-card border p-4 rounded-lg bg-white shadow-sm">
    <img
      :src="image"
      :alt="name"
      class="w-full h-48 object-cover mb-4 rounded"
    >
    <div class="text-sm text-caption mb-1">
      {{ brand }}
    </div>
    <div class="text-lg font-semibold">
      {{ name }}
    </div>
    <div class="flex items-center gap-2 mt-2">
      <span class="text-brand font-bold">{{ newPrice }} ₽</span>
      <span
        v-if="oldPrice"
        class="line-through text-caption"
      >{{ oldPrice }} ₽</span>
    </div>
  </div>
</template>
