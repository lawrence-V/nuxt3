<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-app-bar-title>Iphone</v-app-bar-title>

      <v-spacer></v-spacer>
      <NuxtLink to="/" class="pr-4">Home</NuxtLink>
      <NuxtLink to="/about" class="pr-4">About</NuxtLink>
      <NuxtLink to="/profile" class="pr-4">Profile</NuxtLink>
      <NuxtLink to="/iphone" class="pr-4">Iphones</NuxtLink>
      <p>Cart({{ cart.length }})</p>

      <v-btn
        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="onClick"
        >Toggle Theme</v-btn
      >
    </v-app-bar>

    <v-main>
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const cart = useCart()
console.log(cart.value.length)
</script>
