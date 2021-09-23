<template>
<!-- Home.vue & Search.vue 화면에 들어가야 함 -->

<div class="HeaderBar">
  <!-- 배경이미지 -->
  <v-toolbar flat class="toolbarImage"
    prominent
    height="250px"
    src="@/assets/배경2.jpeg"
  >
  
  <!-- 공원모아 로고 -->
  <a bind: href="http://localhost:8080/home"> 
  <v-img
    alt="Logo"
    class="shrink mr-2"
    contain
    src="@/assets/gwmoa_logo.png"
    transition="scale-transition"
    width="200"
  />
  </a>
  
  <v-spacer></v-spacer>

  <!-- 즐겨찾기 & 열람목록 아이콘 -->
  <v-btn icon href="http://localhost:8080/markList">   
  <v-icon large color="#E57373">mdi-heart</v-icon>
  </v-btn>
  
  <v-btn icon href="http://localhost:8080/openList">
  <v-icon large color="#558B2F">mdi-format-list-bulleted-square</v-icon>
  </v-btn>

  <!-- 검색바 -->
  <template lang="ko">
    <head>
      <title>Document</title>
      <meta charset="UTF-8" />
      <meta name="Author" content="" />
      <meta name="Keywords" content="" />
      <meta name="Description" content="" />
      
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <div class="search-box">
          <input
          v-bind:value="inputText"
          v-on:input="updateInput"
          type="text"
          class="search-txt"
          name=""
          placeholder="#" />

          <a class="search-btn" @click="getinfo(inputText)">
            <i class="fas fa-search"></i>
          </a>
        </div>
    </body>
  </template>
    
  <!-- 사용자 위치 주소 아이콘 & 바 -->
  <div class="location">
    <!-- 아이콘 -->
    <v-btn class="ma-2" color="#212121" dark>
      <!-- @click="getCurrentPosition(position)"> -->
      <v-icon dark color="#E64A19">mdi-antenna</v-icon>
      <!-- 바 -->
      <v-card class="d-flex pa-0" outlined tile>
        <div v-if="error">서울 시청 주소: {{ error }}</div>
        <div v-if="gettingLocation">위치 가져오는 중...</div>
        <div v-if="location">사용자 위치 주소: {{location.coords.latitude}}, {{ location.coords.longitude}}</div>
      </v-card>
    </v-btn>
  </div>

  </v-toolbar> 
</div>
</template>
 


<!-- 사용자 위치 가져오기 -->
<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      dialog: false,
      inputText: "",
      
      location: null,
      gettingLocation: false,
      error: null
    }
  },
  created() {
    //do we support geolocation
    if(!("geolocation" in navigator)) {
      this.error = 'Geolocation is not available.';
      return;
    }

    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(pos => {
      this.gettingLocation = false;
      this.location = pos;
      console.log('userLocation: ', this.location ,);
    }, err => {
      this.gettingLocation = false;
      this.error = err;

      var latitude = 37.566361;
      var longitude = 126.977944;
      this.error = latitude + ', ' + longitude;
      console.log('latitude ', latitude , ', longitude ' , longitude);

    })
  },

  // mounted() {
  //   //사용자 위치 동의 불러오기
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       var latitude = position.coords.latitude; //위도
  //       var longitude = position.coords.longitude; //경도

  //       this.curPosition = '사용자 위치 주소: ' + latitude + ', ' + longitude;
  //       console.log('latitude ', latitude , ', longitude ' , longitude);
  //     });

  //   if (navigator.geolocation) {}
  //   else {
  //     function error(e) {
  //     var latitude = 37.566361;
  //     var longitude = 126.977944

  //     this.curPosition = '서울 시청 주소: ' + latitude + ', ' + longitude;
  //     alert('사용자 위치 오류로 서울시청 기준으로 검색됩니다.');
  //     console.log('latitude', latitude , ', longitude', longitude);
  //     }
      
  //   };


  // },
  // mounted() {
  //   this.geolocation = navigator.geolocation.getCurrentPosition((position) => {
  //   console.log(position.coords.latitude + ",, " + position.coords.longitude)
  //   this.latitude = position.coords.latitude
  //   this.longitude = position.coords.longitude
  //   this.curPosition = "사용자 위치 주소: " + String(this.latitude) + ",,," + String(this.longitude)
  //   })
  // },
  // computed: {
  //   getLocation() {
  //     return navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude //위도
  //       this.longitude = position.coords.longitude //경도
  //       this.curPosition = "사용자 위치 주소" + String(this.latitude) + ", " + String(this.longitude)
  //     })
  //   }
  // },
  methods: {
    ...mapActions(["getinfo"]),
    updateInput: function (e) {
      var updatedText = e.target.value
      this.inputText = updatedText
    }
  }
}
  
//   if (navigator.geolocation) {
    
//     // GeoLocation을 사용 가능 할 때
//     navigator.geolocation.getCurrentPosition(function(position) {
        
//         var lat = position.coords.latitude, // 위도
//             lon = position.coords.longitude; // 경도
//             curPosition = "사용자 위치 주소" + String(lat) + ", " + String(lon)
        
//       });
    
// } else { // GeoLocation을 사용 할 수 없을때
    
//     var lat = 37.566361 // 서울시청 위도
//         lon = 126.977944 // 서울시청 경도
//         curPosition = "사용자 위치 주소" + String(lat) + ", " + String(lon)
//         message = 'geolocation을 사용할수 없어요..'
//         }
</script>




<style>
/*검색바 스타일*/
a {
  text-decoration: none;
}

.search-box {
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #e9e8e8;
  height: 60px;
  border-radius: 40px;
  padding: 10px;
}

.search-box:hover > .search-txt {
  width: 240px;
  padding: 0 6px;
}

.search-box:hover > .search-btn {
  background: #1e1e1e;
  color: white;
}

.search-btn {
  color: #d9d9d9;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2f4032;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
}

.search-txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: #1e1e1e;
  font-size: 18px;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
}

/* 위치 아이콘 & 바 스타일 */
.location {
  position: absolute;

  top: 70%;
  left: 50%;
  transform: translate(-50%, -20%);
}
</style>