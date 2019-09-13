<template>
  <v-app id="login">
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
                      prepend-icon="person"
                      name="login"
                      label="Login"
                    ></v-text-field>
                    <v-text-field
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="cyan"
                    class="white--text"
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
                    ></v-text-field>
                    <v-text-field
                      prepend-icon="email"
                      name="email"
                      label="Email"
                    ></v-text-field>
                    <v-text-field
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                    ></v-text-field>
                    <v-text-field
                      prepend-icon="lock"
                      name="repeatpassword"
                      label="Repeat Password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="cyan"
                    class="white--text"
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
      active: null
    }
  }
}
</script>

<style>
</style>
