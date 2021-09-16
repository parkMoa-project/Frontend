<template>
  <div>
    <Header />
    <Sort />

    <!--검색결과 list -->
    <v-container class="mx-auto mt-0" max-width="full">
      <h2 class="d-flex justify-start">즐겨찾기 목록</h2>
      <v-list>        
        <v-list-item class="my-2" v-for="(item, i) in calData" :key="i" ripple="ripple">
            
          <!-- 공원 정보 : 사진,이름,주소,별점,거리순 -->
          <v-img aspect-ratio="1.5" :src="item.image" max-width="300" min-width="300"></v-img>
              
            
          <v-row>
            <v-col cols="12" class="ml-6 mb-6">
              <h3 class="d-flex font-weight-bold" v-text="item.parkname" style="color: #1a237e"></h3>
            </v-col>
            <v-col cols="12" class="ml-6 py-1 d-flex justify-start">
              <div v-text="item.address"></div>
            </v-col>
            <v-col cols="12" class="ml-6 py-1 d-flex justify-start">
              <div v-text="item.ratings"></div>
            </v-col>
            <v-col cols="12" class="ml-6 mb-7 py-1 d-flex justify-start">
              <div v-text="item.distance" style="color: #bdbdbd"></div>
            </v-col>
          </v-row>

          <v-btn>삭제</v-btn>
           
          </v-list-item>
      </v-list>
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
}
</script>