import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios"; //axios 호출
import store from "./store/index"; //설정 vuex 호출

let url = "http://20.194.30.72:8000/parkmoa/"; // 장고 drf 서버 주소
Vue.use(vuetify)
Vue.config.productionTip = false; //Vue앱이 처음 실행될 때 나오는 경고문 출력 유무 설정
// Vue.prototype.$axios = axios; //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음

axios.get(url)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  })

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')