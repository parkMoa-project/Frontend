<template>
  <div>
    <Header />
    <Sort />

    <v-container flat="flat" tile="tile">
      <v-subheader>{{ type }}</v-subheader>
      <v-row>
        <v-spacer></v-spacer>
        <v-col v-for="card in cards" :key="card" cols="12" sm="6" md="4">
          <v-card>
            <v-img src="@/assets/응봉.jpeg" height="300px">
              <span
                class="headline white--text pl-4 pt-4"
                v-text="card.title"
              ></span>
            </v-img>

            <v-card-actions class="white justify-center">
              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                :color="social.color"
                class="white--text"
                fab="fab"
                icon="icon"
                small="small"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <span>
                응봉공원 :서울시 성동구 금호동 1가 산1-72
                <br />
                ★★★★☆ 4.0
              </span>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
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
  data: () => ({
    types: ["Places to Be"],
    cards: ["Bookmark", "Bookmark", "Bookmark"],
    socials: [
      {
        icon: "mdi-heart",
        color: "indigo",
      },
    ],
    methods: {
      getImage() {
        const min = 550;
        const max = 560;
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
    },
  }),
};
</script>