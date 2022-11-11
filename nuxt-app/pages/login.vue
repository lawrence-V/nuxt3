<template>
  <v-row no-gutters>
    <v-col>
      <v-img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
        height="700"
      ></v-img>
    </v-col>
    <v-col align-self="center">
      <!-- <div v-if="_error">
        <v-snackbar v-model="snackbar" multi-line>
          {{ _error }}

          <template v-slot:actions>
            <v-btn color="red" variant="text" @click="snackbar = false"> Close </v-btn>
          </template>
        </v-snackbar>
      </div> -->
      <div v-if="_error">
        <v-alert icon="mdi-cloud-alert" type="error" class="mb-4">{{ _error }}</v-alert>
      </div>
      <form @submit.prevent="onSubmit">
        <!-- Email input -->
        <div class="mb-6">
          <v-text-field
            hide-details="auto"
            label="Email address"
            placeholder="johndoe@gmail.com"
            type="email"
            variant="outlined"
            v-model="form.email"
          ></v-text-field>
        </div>

        <!-- Password input -->
        <div class="mb-6">
          <v-text-field
            variant="outlined"
            label="Password"
            type="input"
            hint="Enter your password to access this website"
            v-model="form.password"
          ></v-text-field>
        </div>

        <!-- Submit button -->
        <v-btn variant="flat" color="info" block type="submit">
          <span v-if="isLoading">...Loading</span>
          <span v-else>Sign-In</span>
        </v-btn>
      </form></v-col
    >
  </v-row>
</template>

<script setup>
const url = 'https://reqres.in/api/login'
const isLoading = ref(false)
const _error = ref(null)

const form = reactive({
  email: 'eve.holt@reqres.in',
  password: 'cityslicka',
})

async function onSubmit() {
  if (isLoading.value) return

  isLoading.value = true
  const { data, error } = await useFetch(url, {
    method: 'post',
    body: form,
  })

  isLoading.value = false
  if (error.value) {
    _error.value = error.value.data.error
    return
  }
  const auth = useAuth()
  auth.value.isAuthenticated = true
  navigateTo('/')
}
</script>
