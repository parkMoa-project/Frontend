<template>
  <div>
    <HeaderBar />
    <Sort />

    <!--v-card 넣을지 뺄지 고민 -->
    <v-container fluid class="mx-auto mt-0" max-width="full">
      <v-card-text class="py-1">
        <v-chip v-for="(keyword, i) in keywords" :key="i" class="mr-2">
          {{ keyword }}
        </v-chip>
      </v-card-text>

      <v-list three-line="three-line">
        <v-list-item
          v-for="(item, i) in searching"
          :key="i"
          ripple="ripple"
          @click="() => {}"
        >
          <!--사진 위 하트북마크 ok / 즐찾 안하면 빈 하트, 즐찾 하면 꽉 찬 하트 ?? / 꽉 찬 하트 Mark_list로 보내기 / 하트 색상
                    가현이랑 얘기하고 바꾸기 -->
          <v-item v-slot:default="{ active, toggle }">
            <v-img
              class="mr-4"
              aspect-ratio="1.5"
              :src="item.image"
              max-width="250"
              min-width="250"
              @click="toggle"
            >
              <v-btn icon="icon" color="#E57373">
                <v-icon>
                  {{ active ? "mdi-heart-outline" : "mdi-heart" }}
                </v-icon>
              </v-btn>
            </v-img>
          </v-item>

          <!-- span 사이 font-weight-bold 왜 변경 안 되냐 ok / ratings 생각해봤는데 여기엔 그냥 데이터로 넣고 키워드,
                    별점 (후기) 쓰는 팝업에서 ratings ui 넣어야 되는거 아닌지 물어보기 / 사진-글 사이 간격 띄우기 & 글 사이 간격 줄이기 /
                    text-uppercase는 모든 글자를 대문자로 바꾼다는 뜻 (노션에 옮겨쓰고 지우기) -->
          <v-list-item-content>
            <h3
              class="d-flex font-weight-bold"
              v-text="item.parkname"
              style="color: #1a237e"
            ></h3>

            <div v-text="item.address"></div>
            <div v-text="item.ratings"></div>
            <div v-text="item.distance" style="color: #bdbdbd"></div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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

  data: () => ({
    items: [
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg",
        parkname: "응봉공원",
        address: "서울특별시 성동구 금호동 1가 산1-72",
        ratings: "★★★★☆ 4.0",
        distance: "여기서부터 7.3km",
        keyword: "??",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*BBNtYUieAqHoXKjiJ2mMjQ.png",
        parkname: "서울숲체육공원",
        address: "서울성동구 성수동 1가",
        ratings: "★★★★☆ 3.7",
        distance: "여기서부터 4km",
        keyword: "Phones",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*rTEtei1UEmNqbq6evRsExw.jpeg",
        parkname: "살곶이체육공원",
        address: "서울 성동구 성수동 1가",
        ratings: "★★★☆☆ 3.0",
        distance: "여기서부터 5.8km",
        keyword: "Social",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*FD2nkJewVeQnGf0ommQfrw.jpeg",
        parkname: "Technology",
        address:
          "The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence",
        ratings: "별점",
        distance: "??",
        keyword: "Military",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg",
        parkname: "Travel",
        address: "Degrees of Freedom and Sudoko",
        ratings: "별점",
        distance: "??",
        keyword: "Social",
      },
    ],
    search: "",
  }),

  computed: {
    keywords() {
      if (!this.search) return [];

      const keywords = [];

      for (const search of this.searching) {
        keywords.push(search.keyword);
      }

      return keywords;
    },
    searching() {
      if (!this.search) return this.items;

      const search = this.search.toLowerCase();

      return this.items.filter((item) => {
        const text = item.title.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
  },
};
</script>