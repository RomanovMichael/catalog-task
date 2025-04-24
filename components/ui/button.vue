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
    class="h-10 rounded-lg px-6 cursor-pointer bg-black text-white transition-all hover:bg-pink-500 active:scale-95"
    @click="emit('click')"
  >
    {{ props.label }}
  </button>
</template>
