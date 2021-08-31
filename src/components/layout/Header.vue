<template>
  <div class="Header">
      <!-- 배경이미지 -->
        <v-toolbar
            flat
            dark="dark"
            prominent="prominent"
            height="150px"
            src="@/assets/배경.jpeg">

            <!-- 공원모아 로고 -->
            <a bind:="bind:" href="http://localhost:8080/home">
                <v-img
                    alt="Logo"
                    class="shrink mr-2"
                    contain="contain"
                    src="@/assets/gwmoa_logo.png"
                    transition="scale-transition"
                    width="200"/>
            </a>

            <v-spacer></v-spacer>

            <!-- 즐겨찾기 & 열람목록 아이콘 -->
            <v-btn icon="icon" href="http://localhost:8080/Mark_list">
                <v-icon large="large" color="#558B2F">mdi-heart</v-icon>
            </v-btn>

            <v-btn icon="icon" href="http://localhost:8080/Open_list">
                <v-icon large="large" color="#558B2F">mdi-format-list-bulleted-square</v-icon>
            </v-btn>

        </v-toolbar>
    </div>

</template>

<script></script>

<style></style>