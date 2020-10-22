<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <div class="ff" v-if="errorText === true">
              <h1>asd{{ error.message }}</h1>
            </div>
            <v-container>
              <form @submit.prevent="onSignIn">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">Sign in</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errorText: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        console.log("jjj");
        this.$router.push("/");
      }
    },
    // error(value) {
    //   if (value !== null && value !== undefined) {
    //     this.errorText = true;
    //   }
    // },
  },
  methods: {
    onSignIn() {
      var a = { email: this.email, password: this.password };
      console.log(a);

      this.$store.dispatch("signInUser", a);
    },
    onDismissed() {
      this.$store.dispatch("clearError");
      console.log("onDismissed");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
