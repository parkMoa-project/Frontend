<template>

<!-- Home.vue & Search.vue 화면에 들어가야 함 -->

<div class="HeaderBar">
  <!-- 배경이미지 -->
  <v-toolbar
    dark
    prominent
    height="250px"
    src="@/assets/배경2.jpeg"
  >
  
  <!-- 공원모아 로고 -->
  <a bind: href="http://localhost:8080/"> 
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
  <v-btn icon href="http://localhost:8080/Mark_list">   
  <v-icon large color="#558B2F">mdi-heart</v-icon>
  </v-btn>
  
  <v-btn icon href="http://localhost:8080/Open_list">
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
          type="text"
          class="search-txt"
          name=""
          placeholder="#를 이용해 검색해보세요"
        />
        <a class="search-btn" href="http://localhost:8080/Search">
          <i class="fas fa-search"></i>
        </a>
      </div>
    </body>
  </template>
    
  <!-- 사용자 위치 주소 아이콘 & 바 -->
  <div class="location">
    <!-- 아이콘 -->
    <v-btn
      class="ma-2" 
      color="#212121" 
      dark
      href="http://localhost:8080/location">
      <v-icon dark color="#E64A19">mdi-antenna</v-icon>
    <!-- 바 -->
    <v-card
      class="d-flex pa-0"
      outlined
      tile>
      <div>사용자 위치 주소: 서울특별시 00구 00동</div>
    </v-card>
    </v-btn>
  </div>

  </v-toolbar>
</div>

</template>



<script>
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