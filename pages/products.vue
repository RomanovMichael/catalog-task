<template>
  <section class="py-10">
    <ui-container>
      <h1 class="text-2xl font-bold mb-6">
        Каталог товаров
      </h1>

      <div
        v-if="status === 'pending'"
        class="text-center text-caption"
      >
        Загрузка...
      </div>

      <div
        v-else-if="status === 'error'"
        class="text-center text-red-500"
      >
        Ошибка загрузки: {{ error?.message }}
      </div>

      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <product-card
          v-for="product in products"
          :key="product.url"
          v-bind="product"
        />
      </div>
    </ui-container>
  </section>
</template>

<script setup lang="ts">
import { apiPath } from '~/utils/api'
import type { Product } from '~/types/product'
import { useProductStore } from '~/store/product'

const productsStore = useProductStore()

const {
  data,
  status,
  error,
} = await useAsyncData<Product[]>('products', () =>
  $fetch(apiPath.products),
)

if (data.value) {
  productsStore.setProducts(data.value)
}
else {
  console.warn('[Product Page] Продукты не загружены')
}

const products = computed(() => productsStore.products)
</script>
