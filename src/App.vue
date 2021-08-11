<template>
  <v-app id="app">
    <!-- v-bind:하위컴포넌트 속성명="상위 컴포넌트 전달할 데이터명"  -->
    <v-content id="content" class="content" v-bind:propsdata="Search">
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import axios from "axios";
import Footer from "./components/layout/Footer.vue";

let url = "http://20.194.30.72:8000/parkmoa/"; // 장고 drf 서버 주소

export default {
  data: () => {
    return {
      Search: [],
    };
  },

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
      .then((response) => {
        this.Search = response.data;
      })
      .catch((response) => {
        console.log("Failed", response);
      });
  },
  methods: {
    // CRUD 로직
    Search: function () {},
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