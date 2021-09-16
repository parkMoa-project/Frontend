<template>
  <div>
    <Header />

    <!-- 공원 상세정보 start-->
    <v-container fluid class="mx-auto my-10">
      <v-list-item v-model="detail">
        <v-list-item-content>
          <!-- 공원 이름 & 하트 아이콘  -->
          <v-row>
            <v-col class="ml-12 d-flex justify-start"> 
              <h1 style="color:#558B2F">공원이름</h1>
            </v-col>
       
            <v-col cols="1" class="mr-12 d-flex justify-end">
              <v-item-group>
                <v-item v-slot:default="{ active, toggle }">
                  <v-btn icon="icon" color="#E57373" class="align-self-center">
                    <v-icon @click="toggle"> 
                      {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                    </v-icon>
                  </v-btn>
                </v-item>
              </v-item-group>  
            </v-col> 
          </v-row>
  

          <v-divider />


          <v-row class="ma-3">
            <!-- 공원 이미지 & 별점(별점,평균 값) & 별점 리뷰 버튼-->
            <v-col cols="auto">
              <v-img class="ml-4" width="500px" height="300px"        
                src=""> 
              </v-img> 
        
              <v-row align="center" class="ma-3">
                <v-rating
                  :value="4.5"
                  color="warning"
                  dense
                  half-increments
                  readonly
                  size="25">
                </v-rating>
                <div class="grey--text ml-3">4.5</div>
              </v-row>         

              <Review/> 
            </v-col>

            <!-- 공원 상세 정보들 : 관련 키워드,주소,면적,개요,개원일,주요시설,번호,주요식물,안내도,오시는길,이용시 참고사항-->
            <v-col class="ml-7">
              <v-row>
                <v-col class="a d-flex justify-start font-italic" cols="12" style="color:#558B2F">#응봉 #성동구 #강아지산책 #운동 #넓음 #어린이</v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-start grey--text" cols="12">여기서부터 7.2km</v-col>
              </v-row>
              <v-divider class= "mt-2 mb-6"/>
              <v-row>
                <v-col class="a d-flex justify-start" cols="auto">주소</v-col>
                <v-col class="b text-justify ml-9" v-text="item.address"></v-col>
              </v-row>
              <v-row>
                <v-col class="a d-flex justify-start" cols="auto">면적</v-col>
                <v-col class="b text-justify ml-9">면적 내용임</v-col>
              </v-row>
              <v-row>
                <v-col class="a d-flex justify-start" cols="auto">개요</v-col>
                <v-col class="b text-justify ml-9">개요 내용임</v-col>
              </v-row>
              <v-row>
                <v-col class="a d-flex justify-start" cols="auto">개원일</v-col>
                <v-col class="b text-justify ml-5">개원일 내용임</v-col>
              </v-row>
              <v-row>
                <v-col class="a d-flex justify-start" cols="auto">주요시설</v-col>
                <v-col class="b text-justify ml-1">주요시설 내용임</v-col>
              </v-row>
              <v-row>
                <v-col class="a d-flex justify-start" cols="auto">번호</v-col>
                <v-col class="b text-justify ml-9">번호 내용임</v-col>
              </v-row>
              <v-row>
                <v-col class="a d-flex justify-start" cols="auto">주요식물</v-col>
                <v-col class="b text-justify ml-1">주요식물 내용임</v-col>
              </v-row>
              <v-row>
                <v-col class="a d-flex justify-start" cols="auto">안내도</v-col>
                <v-col class="b text-justify ml-5">안내도 내용임</v-col>
              </v-row>
              <v-row>
                <v-col class="a d-flex justify-start" cols="auto">오시는 길</v-col>
                <v-col class="b text-justify ml-0">오시는길 내용임</v-col>
              </v-row>
              <v-row>
                <v-col class="a d-flex justify-start" cols="auto">참고사항</v-col>
                <v-col class="b text-justify ml-1">이용시 참고사항 내용임</v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </v-container>
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue";
import Review from "./Review.vue";

export default {
  name: "ParkInfo",
  components: {
    Header: Header,
    Review: Review,
  },
  data() {
    return {
      detail: false,
      item: {
        parkname: null,
        address: null,
      },
      // body:this.$router.query,
      // num:this.$route.query.num
    };
  },
  methods: {
    doOpen(item) {
      this.detail = true;
      this.item = item;
    },
    doclose() {
      this.detail = false;
    } //필요 없으면 지우기 
  }
}
</script>

<style>
.a {
  color: black;
  font-weight: bolder;
  font-size: large;
}
</style>