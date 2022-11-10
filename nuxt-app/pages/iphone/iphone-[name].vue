<template>
  <div>
    <div>
      <Head>
        <Title>Nuxt 3 -{{ name }}</Title>
      </Head>
    </div>
    <div>
      <v-card class="mx-auto" max-width="500">
        <v-img
          :src="`/images/iphone-${route.params.name}.jpg`"
          height="200px"
          cover
        ></v-img>

        <v-card-title> Iphone - {{ name }}</v-card-title>

        <v-btn @click="addToCart" color="secondary" class="ma-4">
          <span v-if="isInCart()">Delete from the cart</span>
          <span v-else>Buy Now</span>
        </v-btn>
      </v-card>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
// useHead({
//   title: `NUxt3 - ${route.params.name.replaceAll('-', '  ')}`,
// })

const name = computed(() => {
  return route.params.name.replaceAll('-', '  ')
})

const fullname = computed(() => {
  return `iphone-${route.params.name}`
})

const cart = useCart()

// const inCart = computed(() => !! cart.value.find((ct) => ct.name === fullname.value))

function isInCart() {
  return !!cart.value.find((ct) => ct.name === fullname.value)
}

function addToCart() {
  if (!isInCart()) {
    cart.value.push({ name: fullname })
  } else {
    cart.value = cart.value.filter((ct) => ct.name !== fullname.value)
  }
}
</script>
