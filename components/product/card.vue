<template>
  <nuxt-link
    :to="product.url"
    class="products-card block group rounded-xl transition-all"
  >
    <img
      :src="product.image"
      :alt="product.name"
      class="group-hover:z-10 w-full h-[12.5625rem] rounded-xl aspect-square object-cover overflow-hidden transition-transform duration-300"
    >

    <div class="group-hover:z-10 space-y-1">
      <div class="products-card__price flex gap-1 items-center">

        <div class="text-base font-bold text-sm">
          {{ formatPrice(product.newPrice) }} ₽
        </div>

        <div
          v-if="product.oldPrice"
          class="text-xs line-through text-caption"
        >
          {{ formatPrice(product.oldPrice) }} ₽
        </div>
      </div>

      <p class="text-caption font-semibold uppercase text-xs">{{ product.brand }}</p>
      <h2 class="text-sm line-clamp-2 overflow-hidden text-ellipsis">{{ product.name }}</h2>

    </div>
    <div
      class="products-card__dropdown
            group-hover:shadow-lg
            group-hover:z-1
            group-hover:scale-105
            group-hover:bg-white
            transition-all duration-300 rounded-2xl
            z-[-1]"
    >
      <ui-button />
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import { formatPrice } from '~/utils/format'
import type { Product } from '~/types/product'

const product = defineProps<Product>()
</script>

<style>
.products-card {
  position: relative;
  z-index: 0;
}

.products-card:hover {
  z-index: 10;
}

.products-card:hover .products-card__dropdown,
.products-card:hover img {
  z-index: 20; /* всё внутри поднимаем выше */
}

.products-card:hover img {
  position: relative;
}

.products-card__dropdown {
  position: absolute;
  padding: 1rem;
  left: -1rem;
  top: -1rem;
  width: calc(100% + 2rem);
  height: calc(100% + 2rem);
  background-color: white;
  border-radius: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

.products-card:hover .products-card__dropdown {
  opacity: 1;
  z-index: 10;
  pointer-events: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transform: scale(1.02);
}
</style>
<!-- <style>
  .products-card {
    position: relative;
    z-index: 0; /* по умолчанию */
  }

.products-card__dropdown {
  position: absolute;
  padding: 1rem;
  left: -1rem;
  top: -1rem;
  width: calc(100% + 2rem);
  height: calc(100% + 2rem);
  background-color: white;
  border-radius: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Активируем при наведении на карточку */
.products-card:hover {
  z-index: 10;
}

.products-card:hover .products-card__dropdown {
  opacity: 1;
  z-index: 10;
  pointer-events: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transform: scale(1.02);
}

  /* .products-card:hover  .products-card__dropdown {
    width: calc(100% + 2rem);
    left: -1rem;
    height: calc(100% + 2rem);
    top: -1rem;

    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: white;
  }

  .products-card__dropdown {
    padding: 1rem;
    position: absolute;
    display: none;
    left: -1rem;
    height: calc(100% + 5rem);
    top: -1rem;
  } */
</style> -->
