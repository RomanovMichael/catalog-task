<template>
  <section class="py-10">
    <ui-container>
      <div
        v-if="product"
        class="space-y-6"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full max-w-md mx-auto rounded-lg"
        >

        <h1 class="text-2xl font-bold">
          {{ product.name }}
        </h1>

        <p class="text-caption">
          {{ product.brand }}
        </p>

        <div class="text-xl font-semibold">
          {{ formatPrice(product.newPrice) }} ₽
        </div>

        <div
          v-if="product.oldPrice"
          class="text-sm line-through text-caption"
        >
          {{ formatPrice(product.oldPrice) }} ₽
        </div>
      </div>

      <div
        v-else
        class="text-center text-caption"
      >
        Товар не найден
      </div>
    </ui-container>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProductStore } from '~/store/product'
import { formatPrice } from '~/utils/format'
import type { Product } from '~/types/product'

const route = useRoute()
const id = route.params.id as string
const store = useProductStore()

const { data: productFromServer } = await useAsyncData<Product>(`product-${id}`, () =>
  $fetch(`/api/products/${id}`),
)

const product = computed(() =>
  store.products.find(item => item.url.endsWith(`/${id}`)) ?? productFromServer.value ?? null,
)
</script>
