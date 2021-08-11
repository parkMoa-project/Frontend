<template>
  <div>
    <Header />
    <Sort />

    <v-container fluid>
      <h1>열람 목록 화면임.</h1>
    </v-container>
  </div>
</template>


<script>
import Header from "../components/layout/Header.vue";
import Sort from "../components/layout/Sort.vue";

export default {
  components: {
    Header: Header,
    Sort: Sort,
  },
};
</script>


<style>
</style>