<template>
  <v-app id="app">
    <v-main id="content" class="content">
      <router-view :key="$route.fullPath"></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import axios from "axios";
import Footer from "./components/layout/Footer.vue";

let url = "http://20.194.30.72:8000/parkmoa/"; // 장고 drf 서버 주소

export default {
  name: "App",
  components: {
    Footer: Footer,
  },

  mounted() {
    // DOM 객체가 생성된 후 DRF server 에서 데이터를(Search) 가져와 저장
    axios({
      method: "GET",
      url: url,
    })
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin: 0;
  background-color: rgb(240, 242, 236);
}
</style>