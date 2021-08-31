<template>
  <div>
    <Header />

    <!-- 공원 상세정보 start-->
    <v-container fluid class="mx-auto my-10">
      <!-- 공원 이름 & 하트 아이콘  -->
      <v-row>
        <v-col class="ml-12 d-flex justify-start"> 
          <h1 style="color:#558B2F">공원이름</h1>
        </v-col>
       
        <v-col cols="1" class="mr-12 d-flex justify-end">
          <v-item v-slot:default="{ active,  }">
            <v-btn icon="icon" color="#E57373" class="align-self-center">
              <v-icon>
                {{ active ? "mdi-heart-outline" : "mdi-heart" }}
              </v-icon>
            </v-btn>
          </v-item>
        </v-col> 
      </v-row>


      <v-divider />


      <v-row class="ma-3">
        <!-- 공원 이미지 & 별점(별점,평균 값) & 별점 리뷰 버튼-->
        <v-col cols="3">
          <v-img class="ml-4" width="500px" height="300"            
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQSoGN9Kvmoa0MaUN7hpCuVGm_afXfZKDrQ&usqp=CAU"> 
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
            <v-col class="a d-flex justify-start font-italic" cols="12" style="color:#558B2F">
              #응봉 #성동구 #강아지산책 #운동 #넓음 #어린이
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-start grey--text" cols="12">
              여기서부터 7.2km 
            </v-col>
          </v-row>
          <v-divider class= "mt-2 mb-6"/>
          <v-row>
            <v-col class="a d-flex justify-start" cols="1">
              주소
            </v-col>
            <v-col class="text-justify" cols="11">주소 내용임
            </v-col>
          </v-row>
          <v-row>
            <v-col class="a d-flex justify-start" cols="1">
              면적
            </v-col>
            <v-col class="text-justify" cols="11">
              면적 내용임
            </v-col>
          </v-row>
          <v-row>
            <v-col class="a d-flex justify-start" cols="1">
              개요
            </v-col>
            <v-col class="text-justify" cols="11">
              개요 내용임
            </v-col>
          </v-row>
          <v-row>
            <v-col class="a d-flex justify-start" cols="1">
              개원일
            </v-col>
            <v-col class="text-justify" cols="11">
              개원일 내용임
            </v-col>
          </v-row>
          <v-row>
            <v-col class="a d-flex justify-start" cols="1">
              주요시설
            </v-col>
            <v-col class="text-justify" cols="11">
              주요시설 내용임
            </v-col>
          </v-row>
          <v-row>
            <v-col class="a d-flex justify-start" cols="1">
              번호
            </v-col>
            <v-col class="text-justify" cols="11">
              번호 내용임
            </v-col>
          </v-row>
          <v-row>
            <v-col class="a d-flex justify-start" cols="1">
              주요식물
            </v-col>
            <v-col class="text-justify" cols="11">
              주요식물 내용임
            </v-col>
          </v-row>
          <v-row>
            <v-col class="a d-flex justify-start" cols="1">
              안내도
            </v-col>
            <v-col class="text-justify" cols="11">
              안내도 내용임
            </v-col>
          </v-row>
          <v-row>
            <v-col class="a d-flex justify-start" cols="1">
              오시는 길
            </v-col>
            <v-col class="text-justify" cols="11">
              오시는길 내용임
            </v-col>
          </v-row>
          <v-row>
            <v-col class="a d-flex justify-start" cols="1"> 
              참고사항
            </v-col>
            <v-col class="text-justify" cols="11">
              이용시 참고사항 내용임
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue";
import Review from "./Review.vue";

export default {
  components: {
    Header: Header,
    Review,
  },
  views: {
    Review: Review,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style>
.a {
  color: black;
  font-weight: bolder;
  font-size: large;
}
</style>