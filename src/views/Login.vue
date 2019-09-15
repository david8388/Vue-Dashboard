<template>
  <v-app id="login">
    <v-progress-linear
      indeterminate
      color="cyan"
      v-show="isLoading"
    ></v-progress-linear>
    <v-container
      fluid
      fill-height
    >
      <v-layout
        align-center
        justify-center
      >
        <v-flex
          xs12
          sm8
          md4
        >
          <v-card class="elevation-12">
            <v-toolbar
              dark
              color="cyan darken-2"
            >
              <v-toolbar-title>Login Form</v-toolbar-title>
            </v-toolbar>
            <v-tabs
              v-model="active"
              color="cyan"
              dark
              side-color="yellow"
              ref="logins"
            >
              <v-tab ripple> LOGIN</v-tab>
              <v-tab-item>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      v-model="loginForm.account"
                      prepend-icon="person"
                      name="login"
                      label="Login"
                    ></v-text-field>
                    <v-text-field
                      v-model="loginForm.password"
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      :type="isPassword? 'Password': ''"
                      :append-icon="isPassword? 'visibility': 'visibility_off'"
                      @click:append="isPassword = !isPassword"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="cyan"
                    class="white--text"
                    @click="login"
                  >Login</v-btn>
                </v-card-actions>
              </v-tab-item>
              <v-tab ripple>Register</v-tab>
              <v-tab-item>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      prepend-icon="person"
                      name="login"
                      label="Login"
                      v-model="registerForm.account"
                    ></v-text-field>
                    <v-text-field
                      prepend-icon="email"
                      name="email"
                      label="Email"
                      v-model="registerForm.email"
                    ></v-text-field>
                    <v-text-field
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      type="password"
                      v-model="registerForm.password"
                    ></v-text-field>
                    <v-text-field
                      prepend-icon="lock"
                      name="ConfirmPassword"
                      label="Confirm Password"
                      type="password"
                      v-model="registerForm.confirmPassword"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="cyan"
                    class="white--text"
                    @click="register"
                  >Register</v-btn>
                </v-card-actions>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      active: null,
      isPassword: true,
      isLoading: false,
      loginForm: {
        account: '',
        password: ''
      },
      registerForm: {
        account: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    login () {
      console.log('Login')
      console.log(this.loginForm)
      this.isLoading = true
      setTimeout(() => {
        this.$router.push('/dashboard')
      }, 3000)
    },
    register () {
      console.log('Register')
      console.log(this.registerForm)
    }
  }
}
</script>

<style>
</style>
