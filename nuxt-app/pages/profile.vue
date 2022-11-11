<template>
  <div>
    <p>welcome user name</p>

    <slot></slot>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'sidebar',
  middleware: ['auth'],
})
</script>
