<template>
  <div>
    <v-navigation-drawer
      fixed
      clipped
      v-model="drawer"
      dark
      app
    >
      <v-list dense>
        <v-list-tile
          v-for="item in items"
          :key="item.text"
          :to="item.path"
        >
          <v-list-tile-action>
            <template v-if="item.icon==='logo'">
              <img
                src="../assets/logo.png"
                alt=""
                style="height:25px; width=25px"
              >
            </template>
            <template v-else>
              <v-icon> {{ item.icon }}</v-icon>
            </template>

          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>

</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      drawer: null,
      sidebarOpen: true,
      appTitle: 'Prediction',
      items: [
        { icon: 'logo', text: 'Prediction', path: 'dashboard' },
        { icon: 'trending_up', text: 'Most Popular', path: 'popular' },
        { icon: 'subscriptions', text: 'Subscrptions', path: 'subscriptions' }
      ]
    }
  }
}
</script>

<style>
</style>
