<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-app-bar-title>Iphone</v-app-bar-title>

      <v-spacer></v-spacer>
      <NuxtLink to="/" class="pr-4">Home</NuxtLink>
      <NuxtLink to="/about" class="pr-4">About</NuxtLink>
      <NuxtLink to="/iphone" class="pr-4">Iphones</NuxtLink>
      <p>Cart({{ cart.length }})</p>
      <p class="mr-3">Total Route Change: {{ pageVisitCount }}</p>
      <div v-if="auth.isAuthenticated" class="ml-4">
        <NuxtLink to="/profile" class="pr-4">Profile</NuxtLink>
        <v-btn @click="logout">Logout</v-btn>
      </div>

      <NuxtLink v-else to="/login" class="pr-4">Login</NuxtLink>

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

const pageVisitCount = usePageVisitCount()

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const cart = useCart()
console.log(cart.value.length)

const auth = useAuth()

function logout() {
  auth.value.isAuthenticated = false
  navigateTo('/login')
}
</script>
