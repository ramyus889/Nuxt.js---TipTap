<script>
export default {
  name: "default",
  mounted() {
    document.title = "Nuxt.js - Code";
  },
};
</script>

<template>
  <div class="">
    <v-btn>
      Code
      <v-tooltip activator="parent" location="start">
        <v-card width="250" class="p-0">
          <v-card-title> Login </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="login" label="Login" />
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="loginUser">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-tooltip>
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

const login = ref("");
const password = ref("");
const loginUser = () => {
  console.log(login.value, password.value);
};
</script>
