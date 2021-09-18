<template>
  <div>
    <Header />

    <!-- 공원 상세정보 start-->
    <v-container fluid class="mx-auto my-10">
      <v-list-item>
        <v-list-item-content>
          <!-- 공원 이름 & 하트 아이콘  -->
          <v-row>
            <v-col class="ml-12 d-flex justify-start"> 
              <h1 style="color:#558B2F">{{item.parkname}}</h1>
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
              <v-img class="ml-4"
                v-if="item.image !== null"
                :src="item.image"
                width="400"
                contain> 
              </v-img>
              <v-img class="ml-4"
                v-else
                src="@/assets/회색.png"
                :aspect-ratio="5/3"
                width="400"
                contain> 
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
              
              <v-row class="cc">
                <v-col class="a d-flex justify-start mr-16" cols="auto">주소</v-col>
                <v-col class="b text-justify ml-5" v-text="item.address"></v-col>
              </v-row>
              <v-row class="cc">
                <v-col class="a d-flex justify-start mr-16" cols="auto">개요</v-col>
                <v-col class="b text-justify ml-5" v-text="item.overview"></v-col>
              </v-row>
              <v-row class="cc">
                <v-col class="a d-flex justify-start mr-13" cols="auto">면적(m²)</v-col>
                <v-col class="b text-justify" v-text="item.area"></v-col>
              </v-row>
              <v-row class="cc">
                <v-col class="a d-flex justify-start mr-13" cols="auto">주요시설</v-col>
                <v-col class="b text-justify" v-text="item.mainfacility" ></v-col>
              </v-row>
              <v-row class="cc">
                <v-col class="a d-flex justify-start mr-13" cols="auto">운동기구</v-col>
                <v-col class="b text-justify" v-text="item.goods"></v-col>
              </v-row>
              <v-row class="cc">
                <v-col class="a d-flex justify-start mr-13" cols="auto">전화번호</v-col>
                <v-col class="b text-justify" v-text="item.pnum"></v-col>
              </v-row>
              <v-row class="cc">
                <v-col class="a d-flex justify-start mr-16" cols="auto">안내도</v-col>
                <v-col class="b text-justify ml-1">
                  <v-img v-if="item.guidemap !== null" :src="item.guidemap" width="700px" contain/>
                  <div v-else>정보없음</div>
                </v-col>
              </v-row>
              <v-row class="cc">
                <v-col class="a d-flex justify-start mr-12" cols="auto">오시는 길</v-col>
                <v-col class="b text-justify" v-text="item.direction"></v-col>
              </v-row>
              <v-row class="cc">
                <v-col class="a d-flex justify-start" cols="auto">이용시 참고사항</v-col>
                <v-col class="b text-justify" v-text="item.notes"></v-col>
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
  computed: {
    item() {
      return JSON.parse(this.$route.query.item) // 스트링 넘어온거를 객체로 다시 파싱해서 쓸수 잇게
    }
  },
}
</script>

<style>
.a {
  color: black;
  font-weight: bolder;
  font-size: large;
}
</style>