import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router"

Vue.use(Vuex);

// const resourceHost = "http://20.194.30.72:8000/"
// var config = {
//     headers: { 'Access-Control-Allow-Origin': '*' }
//   };


export default new Vuex.Store({
  state: {
    parks: [],
    allUsers: [
      { userId: 'abcd', passsword: '123', address: 'Seoul' },
      { userId: 'efgh', password: '456', address: 'Seoul' },
    ]
  },
  getters: {
    parks: (state) => { return state.parks }
  },
  mutations: {
    getinfo(state, payload) {
      state.parks = []
      for (let item of payload) {
        var park = {
          image: "",
          parkname: "",
          address: "",
          ratings: "★★★★☆ 4.0",
          distance: "여기서부터 7.2km",
          keyword: "",
        }
        park.image = item._source.Image
        park.parkname = item._source.Park_name
        park.address = item._source.Parcel_address !== null ? item._source.Parcel_address : item._source.Road_address
        // park.ratings = item._source.Grade    
        // park.distance = 
        park.keyword = item._source.Keyword
        park.latitude = item._source.Latitude
        park.longitude = item._source.Longitude
        state.parks.push(park)
      }
    }
  },
  actions: {
    getinfo({ commit }, inputText) {
      console.log(inputText)
      axios
        .get("http://20.194.30.72:8000/parkmoa/", {
          params: {
            search: inputText
          }
        })
        .then((res) => {
          var parkInfo = []
          console.log(res.data)
          parkInfo = res.data.hits
          console.log("parkinfo")
          console.log(res.data.hits)
          commit("getinfo", parkInfo)
          router.push({ name: "Search", query: { param: inputText } }).catch(e => {
            if (e === "NavigationDuplicated")
              router.replace({ name: "Search", query: { param: inputText } })
          });
        })
    }
  },
  modules: {},
});