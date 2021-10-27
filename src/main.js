import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store/index"; //설정 vuex 호출

Vue.use(vuetify)
Vue.config.productionTip = false; //Vue앱이 처음 실행될 때 나오는 경고문 출력 유무 설정

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')