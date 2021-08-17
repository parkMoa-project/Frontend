<template>
  <div>
    <HeaderBar />
    <Sort />

    <!-- 검색결과 개수 -->
    <v-row no-gutters>
      <v-col cols="7">
        <p v-if="page === 1" class="caption mt-2">
          검색결과 {{ $store.getters.parks.length.toLocaleString("ko-KR") }}개
        </p>
        <p v-else class="caption mt-2">
          검색결과 {{ $store.getters.parks.length.toLocaleString("ko-KR") }}개
          중 {{ page }}페이지
        </p>
      </v-col>
    </v-row>

    <!--v-card 넣을지 뺄지 고민 -->
    <v-container fluid class="mx-auto mt-0" max-width="full">
      <v-card-text class="py-1">
        <v-chip v-for="(keyword, i) in keywords" :key="i" class="mr-2">
          {{ keyword }}
        </v-chip>
      </v-card-text>

      <v-list three-line="three-line">
        <v-list-item
          v-for="(item, i) in calData"
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

      <!-- 페이지 번호 -->
      <div class="text-center">
        <v-pagination
          color="#558B2F"
          v-model="page"
          :length="numOfPages"
          :total-visible="7"
        ></v-pagination>
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
  data: () => ({
    page: 1,
    dataPerPage: 10,
  }),
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
    keywords() {
      if (!this.search) return [];
      const keywords = [];
      for (const search of this.calData) {
        keywords.push(search.keyword);
      }
      return keywords;
    },
  },
};
</script>