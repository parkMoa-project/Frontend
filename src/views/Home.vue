<template>
  <div>
    <HeaderBar />
    <v-container class="hash_tags">
      <a class="산책" @click="getinfo('산책')"><span>#산책</span></a>
      <a class="꽃" @click="getinfo('꽃')"><span>#꽃</span></a>
      <a class="자전거" @click="getinfo('자전거')"><span>#자전거</span></a>
      <a class="데이트" @click="getinfo('데이트')"><span>#데이트</span></a>
      <a class="도시공원" @click="getinfo('도시공원')"><span>#도시공원</span></a>
      <a class="자연공원" @click="getinfo('자연공원')"><span>#자연공원</span></a>
      <a class="운동" @click="getinfo('운동')"><span>#운동</span></a>
      <a class="강아지" @click="getinfo('강아지')"><span>#강아지</span></a>
    </v-container>
  </div>
</template>


<script>
import HeaderBar from "../components/layout/HeaderBar.vue";
import { mapActions } from "vuex";

export default {
  components: {
    HeaderBar: HeaderBar,
  },
  methods: {
    ...mapActions(["getinfo"]),
  },
};
</script>


<style>
/*해시태그 박스 모양 설정*/
.hash_tags > a {
  width: 20%;
  height: 40px;
  padding: 5% 0% 9% 0%;

  /* -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing:border-box; */

  border-radius: 30px; /*모서리 설정*/
  /* border: 0px solid rgb(8, 8, 8); 테두리 */
  box-shadow: 0px 0px 10px 0px rgb(100, 99, 99); /*테두리 그림자*/
  background-color: white; /*배경*/
  display: block; /*글속성 박스로 바꾸기*/

  margin: 15px; /*해시태그 박스끼리 여백*/

  background-size: cover; /*이미지 사이즈*/
  background-position: center; /*이미지 배치*/

  /* 텍스트 설정 */
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: xx-large;
  text-shadow: 2px 2px 2px black;
}

/*포인터 닿으면 텍스트 색상 */
.hash_tags > a:hover {
  color: rgb(5, 252, 33);
}

/*해시태그 박스 이미지 */
.산책 {
  background-image: linear-gradient(
      rgba(74, 73, 73, 0.139),
      rgba(74, 73, 73, 0.139)
    ),
    url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/%EC%82%B0%EC%B1%85%EB%A1%9C%28AMJ%29.jpg/1920px-%EC%82%B0%EC%B1%85%EB%A1%9C%28AMJ%29.jpg");
}
.꽃 {
  background-image: linear-gradient(
      rgba(74, 73, 73, 0.139),
      rgba(74, 73, 73, 0.139)
    ),
    url("https://www.teahub.io/photos/full/115-1159698_wallpaper-bunga-tulip-.jpg");
}
.자전거 {
  background-image: linear-gradient(
      rgba(74, 73, 73, 0.139),
      rgba(74, 73, 73, 0.139)
    ),
    url("https://cdn.pixabay.com/photo/2018/06/02/13/28/bike-3448377_1280.jpg");
}
.데이트 {
  background-image: linear-gradient(
      rgba(74, 73, 73, 0.139),
      rgba(74, 73, 73, 0.139)
    ),
    url("https://www.10wallpaper.com/wallpaper/1366x768/1511/Childhood_love_walk-HD_Desktop_Wallpaper_1366x768.jpg");
}
.도시공원 {
  background-image: linear-gradient(
      rgba(74, 73, 73, 0.139),
      rgba(74, 73, 73, 0.139)
    ),
    url("http://dn.joongdo.co.kr/mnt/images/file/2019y/04m/04d/2019040401000616300023191.jpg");
}
.자연공원 {
  background-image: linear-gradient(
      rgba(74, 73, 73, 0.139),
      rgba(74, 73, 73, 0.139)
    ),
    url("http://www.ccnnews.co.kr/news/photo/202007/185897_236065_5032.jpg");
}
.운동 {
  background-image: linear-gradient(
      rgba(74, 73, 73, 0.139),
      rgba(74, 73, 73, 0.139)
    ),
    url("http://www.dps7330.com/bbs/uks_data/sub03/daeil_1466994814_01.gif");
}
.강아지 {
  background-image: linear-gradient(
      rgba(74, 73, 73, 0.139),
      rgba(74, 73, 73, 0.139)
    ),
    url("https://image-notepet.akamaized.net/resize/620x-/seimage/20191113%2Ff6f280560384db2d6c6d797a281e52b1.png");
}

/*해시태그 박스 배치*/
.hash_tags {
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  flex-wrap: wrap; /*자동줄바꿈, 페이지 가로길이만큼만 원이 들어감 */
  box-sizing: border-box; /*4개 박스가 나오게 설정했음*/

  margin: auto; /*div 가운데 오게하기*/
}
</style>