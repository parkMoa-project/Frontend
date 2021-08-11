<template>
  <div>
    <Header />

    <v-container fluid>
      <h1>**공원</h1>
      <hr />
    </v-container>
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue";

export default {
  components: {
    Header: Header,
  },
};
</script>

<style>
hr {
  height: 5px;
  background-color: green;
}
</style>