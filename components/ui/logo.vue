<script setup lang="ts">
const props = defineProps({
  colorType: {
    type: String as PropType<'white' | 'black'>,
    default: 'black',
  },
})

const colorMap = {
  white: 'text-white',
  black: 'text-black',
}
</script>

<template>
  <nuxt-link
    to="/"
    class="ui-logo block text-[2rem] font-bold font-inter transition-all duration-200 hover:text-brand select-none"
    :class="colorMap[props.colorType]"
  >
    Brand Name
  </nuxt-link>
</template>
