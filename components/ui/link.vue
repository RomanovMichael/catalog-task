<script setup lang="ts">
const props = defineProps({
  colorType: {
    type: String as PropType<'white' | 'pink'>,
    default: 'pink',
  },
  url: {
    type: String,
    default: '#',
  },
  label: {
    type: String,
    default: 'Link label',
  },
})

const colorMap = {
  pink: 'text-brand',
  white: 'text-white',
}
</script>

<template>
  <a
    :href="url"
    target="_blank"
    class="ui-link underline transition-all hover:opacity-70"
    :class="colorMap[props.colorType]"
  >
    {{ props.label }}
  </a>
</template>
