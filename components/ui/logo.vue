<script setup lang="ts">
const props = defineProps({
  colorType: {
    type: String as PropType<'light' | 'dark'>,
    validator: (val: string) => ['light', 'dark'].includes(val),
    default: 'dark',
  },
})
</script>

<template>
  <nuxt-link
    to="#"
    :class="`ui-logo--${props.colorType}`"
    class="ui-logo block text-[2rem] font-bold transition-all duration-200 font-inter"
  >
    Brand Name
  </nuxt-link>
</template>

<style lang="scss">
.ui-logo {
    user-select: none;

    &--light {
        color: var(--color-light);
    }

    &--dark {
        color: var(--color-dark);
    }
    &:hover {
        color: var(--color-pink);
    }
}
</style>
