<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

import Toolbar from './components/Toolbar';

export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  components: {
    Toolbar
  }
}
</script>
