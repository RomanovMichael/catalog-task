<script setup lang="ts">
interface UiButtonProps {
  label?: string
}

const props = withDefaults(defineProps<UiButtonProps>(), {
  label: 'Button',
})

interface UiButtonEmits {
  (e: 'click'): void
}

const emit = defineEmits<UiButtonEmits>()
</script>

<template>
  <button
    class="ui-button h-10 rounded-lg px-6 cursor-pointer transition-all"
    @click="emit('click')"
  >
    {{ label }}
  </button>
</template>

<style lang="scss">
.ui-button {
  background-color: var(--color-dark);
  color: var(--color-light);

  &:hover {
    background-color: var(--color-pink);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
