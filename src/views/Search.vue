<template>
  <div>
    <HeaderBar />
    <Sort />

    <!-- 검색결과 개수 -->
    <v-row no-gutters>
      <v-col cols="7">
        <p v-if="page === 1" class="caption mt-2">
          {{updateInput}}로 입력한 검색결과 {{ $store.getters.parks.length.toLocaleString("ko-KR") }}개
        </p>
        <p v-else class="caption mt-2" >
          {{updateInput}}로 입력한 검색결과 {{ $store.getters.parks.length.toLocaleString("ko-KR") }}개
          중 {{ page }}페이지
        </p>
      </v-col>
    </v-row>

    <!--검색결과 list -->
    <v-container class="mx-auto mt-0" max-width="full"> 
      <v-list>        
        <v-list-item class="my-2" v-for="(item, i) in calData" :key="i" ripple="ripple" @click="() => {}">
          <!--북마크 하트 아이콘 -->
          <v-item-group>
            <v-item v-slot="{ active, toggle }">
              <v-btn class="mr-3" icon dark color="#E57373">
                <v-icon @click="toggle">
                  {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                </v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
            
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
           
          </v-list-item>
      
      </v-list>
      

      <!-- 페이지 번호 -->
      <div class="text-center">
        <v-pagination color="#558B2F" v-model="page" :length="numOfPages" :total-visible="7"></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script>
import HeaderBar from "../components/layout/HeaderBar.vue";
import Sort from "../components/layout/Sort.vue";

export default {
  components: {
    HeaderBar: HeaderBar,
    Sort: Sort,
  },
  data() {
   return {
    page: 1,
    dataPerPage: 10,
    updateInput: "'검색어'",
   }
  },
  computed: {
    startOffset() {
      return (this.page - 1) * this.dataPerPage;
    },
    endOffset() {
      return this.startOffset + this.dataPerPage;
    },
    numOfPages() {
      console.log(this.$store.getters.parks.length);
      return Math.ceil(this.$store.getters.parks.length / this.dataPerPage);
    },
    calData() {
      return this.$store.getters.parks.slice(this.startOffset, this.endOffset);
    },
  },
   
    

}
</script>

<style>
</style>