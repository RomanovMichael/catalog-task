<script setup lang="ts"></script>

<template>
  <footer class="layout-footer py-[1.75rem]">
    <ui-container class="flex align-center justify-between">
      <ui-logo color-type="light" />
      <div class="layout-footer__author text-[0.875rem]">
        <span class="block">Разработчик</span>
        <ui-link
          color-type="light"
          url="https://github.com/RomanovMichael"
          label="Михаил Романов"
          target="_blank"
        />
      </div>
    </ui-container>
  </footer>
</template>

<style lang="scss">
.layout-footer {
  background-color: var(--color-dark);

  &__author {
    color: var(--color-light);
  }
}
</style>
