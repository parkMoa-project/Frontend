import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

// const resourceHost = "http://20.194.30.72:8000/"
// var config = {
//     headers: { 'Access-Control-Allow-Origin': '*' }
//   };


export default new Vuex.Store({
  plugins: [createPersistedState({})],

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
          parkname: "",
          image: "",
          address: "",
          overview: "",
          area: "",
          mainfacility: "",
          goods: "",
          guidemap: "",
          direction: "",
          notes: "",
          pnum: "",

          location: "",
          latitude: "",
          longitude: "",

          ratings: "★★★★☆ 4.0",
          distance: "여기서부터 7.2km",
        }

        park.parkname = item._source.Park_name
        park.image = item._source.Image
        park.address = item._source.Parcel_address !== null ? item._source.Parcel_address : item._source.Road_address
        park.overview = item._source.Park_overview !== null ? item._source.Park_overview : "정보없음"
        park.area = item._source.Park_area !== null ? item._source.Park_area : "정보없음"
        park.mainfacility = item._source.Main_facility !== null ? item._source.Main_facility : "정보없음"
        park.goods = item._source.Sporting_goods !== null ? item._source.Sporting_goods : "정보없음"
        park.guidemap = item._source.Guidemap
        park.direction = item._source.Direction !== null ? item._source.Direction : "정보없음"
        park.notes = item._source.Use_notes !== null ? item._source.Use_notes : "정보없음"
        park.pnum = item._source.Park_number !== null ? item._source.Park_number : "정보없음"

        park.location = item.location
        park.latitude = item._source.Latitude
        park.longitude = item._source.Longitude

        // park.distance =         



        state.parks.push(park)    // parks에 공원정보 저장 
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

// 좌표 -> 주소 카카오맵 api
// coord2Address(x, y, callback, options)
// 좌표 값에 해당하는 구 주소와 도로명 주소 정보를 요청한다.
// 도로명 주소는 좌표에 따라서 표출되지 않을 수 있다.

// var geocoder = new kakao.maps.services.Geocoder();

// var coord = new kakao.maps.LatLng(37.56496830314491, 126.93990862062978);
// var callback = function(result, status) {
//     if (status === kakao.maps.services.Status.OK) {
//         console.log(result[0].address.address_name);
//     }
// };

// geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
// Parameters
// x Number : x 좌표, 경위도인 경우 longitude
// y Number : y 좌표, 경위도인 경우 latitude
// callback Function : 검색 결과를 받을 콜백함수
// options Object
// input_coord Coords : 입력 좌표 체계. 기본값은 WGS84
