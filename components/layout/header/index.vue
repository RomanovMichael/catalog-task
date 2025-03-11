<script setup lang="ts"></script>

<template>
  <header class="layout-header sticky top-0 z-10">
    <ui-container class="flex align-center justify-between">
      <ui-logo />
    </ui-container>
  </header>
</template>

<style lang="scss">
.layout-header {
  background-color: var(--color-light);
  box-shadow: 0 0.625rem 2.5rem 0 rgba(0, 0, 0, 0.1);
}
</style>
