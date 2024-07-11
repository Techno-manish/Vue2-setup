<template>
  <v-app>
    <v-main>
      <v-container >
        <v-card class="cardContainer mx-auto" max-width="400">
          <v-card-title class="counter-value">
            <h1 >{{ count }}</h1>
          </v-card-title>
          <v-card-actions class="button">
            <v-btn @click="increment">Increment</v-btn>
            <v-btn @click="decrement">Decrement</v-btn>
          </v-card-actions>
          <v-card-actions class="button">
            <v-btn @click="reset">Reset</v-btn>
          </v-card-actions>
           
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.getCount;
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment');
    },
    decrement() {
      this.$store.dispatch('decrement')
    },
    reset() {
      this.$store.dispatch('reset')
    }
  }
};
</script>

<style>
/* Add your styles here */
*{
  background-color: #eeeeee;
}
.cardContainer{
  padding: 20px;
  background-color: #eeeeee
}
.counter-value{
  display: flex;
  justify-content: center;
}
.button{
  display: flex;
  justify-content: center;
}

</style>