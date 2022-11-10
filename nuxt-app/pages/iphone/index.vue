<template>
  <v-row>
    <v-col v-for="iphone in iphones" :key="iphone" class="ma-4">
      <nuxt-link
        :to="`/iphone/${iphone}`"
        class="shadow-lg border rounded-lg text-center"
      >
        <v-card class="mx-auto" max-width="344">
          <v-img :src="`/images/${iphone}.jpg`" height="200px" cover></v-img>

          <v-card-title> {{ iphone }}</v-card-title>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could
                deliver. You won't have time for sleeping, soldier, not with all the bed
                making you'll be doing. Then we'll go with that data file! Hey, you add a
                one and two zeros to that or we walk! You're going to do his laundry? I've
                got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script setup>
useHead({
  title: 'Nuxt3 -iphones',
})

const iphones = ['iphone-12', 'iphone-12-pro', 'iphone-13', 'iphone-13-pro']
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
