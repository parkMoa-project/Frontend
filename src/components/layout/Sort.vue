<template>
<!-- Search.vue, Mark_list.vue, Open_list.vue 화면 -->

  <!-- 검색 정렬 순 -->
  <v-layout fluid>
    <v-row class="mt-3" align="center" justify="center">
      <v-col class="d-flex" cols="12" sm="5">
        <v-select
          v-model="category"
          :items="park_sort"
          item-text="sort"
          label="정렬"
          dense
        >
        </v-select>
      </v-col>
    </v-row>
  </v-layout>
</template>


<script>
import {mapActions} from "vuex";
export default {
  data() {
    return {
      //검색 정렬순 설정
      park_sort: [
        { 
          sort: "거리순", 
        }, 
        { 
          sort: "별점순",
        }
      ],
      category: "거리순", // 위치순이 기본 정렬 / 안 하고 싶으면 null
    };
  },
  methods: {
    ...mapActions(["getinfo"]),
  },
};
</script>