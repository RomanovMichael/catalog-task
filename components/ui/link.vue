<script setup lang="ts">
const props = defineProps({
  colorType: {
    type: String as PropType<'pink' | 'light'>,
    validator: (val: string) => ['pink', 'light'].includes(val),
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
</script>

<template>
  <a
    :class="['ui-link', 'underline', 'transition-all', `ui-link--${colorType}`]"
    :href="url"
  >{{ props.label }}</a>
</template>

<style lang="scss">
.ui-link {
  &:hover {
    opacity: 0.64;
  }

  &--pink {
    color: var(--color-pink);
  }

  &--light {
    color: var(--color-light);
  }
}
</style>
