<script setup lang="ts">
import { useCartStore } from '~/store/cart'

const cartStore = useCartStore()
</script>

<template>
  <header class="layout-header py-[1.75rem] bg-white shadow-[0_10px_40px_0_rgba(0,0,0,0.1)] sticky top-0 z-10">
    <ui-container class="flex items-center justify-between">
      <ui-logo />

      <client-only>
        <NuxtLink
          to="/cart"
          class="relative inline-flex items-center hover:opacity-80 transition"
        >
          <Icon
            name="material-symbols:shopping-basket-outline"
            class=" text-[2rem] text-black"
          />
          <span
            class="absolute flex items-center justify-center -top-1 -right-3 bg-pink-500 w-6 h-6 text-white text-xs rounded-full"
          >
            {{ cartStore.cartCount }}
          </span>
        </NuxtLink>
      </client-only>
    </ui-container>
  </header>
</template>
