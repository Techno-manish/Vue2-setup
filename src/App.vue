<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
     <v-main>
      <v-container>
        <router-view></router-view>
          <h1 class="desc">INCREMENT OR DECREMENT</h1>
         <incDec/>
      </v-container>
    </v-main>
  </div>
</template>
<script>

import incDec from '../src/views/IncDec.vue';

export default {
  name: 'App',
  components: {
    incDec,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.desc {
margin-top: 200px;
}
</style>
