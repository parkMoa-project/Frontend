<template>
  <!-- 검색 정렬 순 / 옆에 확인 버튼도 만들어야겠다 -->
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
<!-- 검색 정렬 순 / 옆에 확인 버튼도 만들어야겠다 -->


<script>
export default {
  data() {
    return {
      park_sort: [{ sort: "위치순" }, { sort: "별점순" }], //검색 정렬순 설정
      category: "위치순", // 위치순이 기본 정렬 / 안 하고 싶으면 null
    };
  },
};
</script>

<style>
</style>

