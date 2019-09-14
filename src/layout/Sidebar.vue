<template>
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
      >
        <v-list-tile-action>
          <v-icon> {{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.text }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      drawer: null,
      items: [
        { icon: 'trending_up', text: 'Most Popular', action: 'popular' },
        { icon: 'subscriptions', text: 'Subscrptions', action: 'subscriptions' }
      ]
    }
  },
  methods: {
    popular () {
      console.log('popular')
    },
    subscriptions () {
      console.log('subscriptions')
    }
  }
}
</script>

<style>
</style>
