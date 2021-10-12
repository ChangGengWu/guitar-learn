<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        Guitar Learn
      </a>
    </div>
  </nav>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-8 col-xl-7 mb-3">
        <ul class="nav justify-content-between">
          <li>
            <button
              class="btn btn-primary btn-mode"
              @click.prevent="mode = 'sheet'"
              style="background-color:#f6bd60"
            >
              <i class="bi bi-music-note-list"></i>
              樂譜
            </button>
          </li>
          <li>
            <button
              class="btn btn-primary btn-mode"
              @click.prevent="mode = 'video'"
              style="background-color:#b7094c"
            >
              <i class="bi bi-play-btn"></i>
              影片
            </button>
          </li>
          <li>
            <button
              class="btn btn-primary btn-mode"
              @click.prevent="mode = 'text'"
              style="background-color:#81b29a"
            >
              <i class="bi bi-journal-text"></i>
              筆記
            </button>
          </li>
        </ul>
      </div>
      <div class="col-md-8 col-xl-7" v-if="mode === 'sheet'">
        <ImageView v-model:imageList="imageList" />
      </div>
      <div class="col-md-8 col-xl-7 border" v-if="mode === 'video'">
        <YoutubePlayer />
      </div>
      <div class="col-md-8 col-xl-7 border" v-if="mode === 'text'">
        <YoutubePlayer />
      </div>
      <div class="col-md-4 col-xl-5">
        <div>
          <ImageUpload v-model:imageList="imageList" />
        </div>
        <div class="mt-4">
          <YoutubePlayer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import YoutubePlayer from "@/components/YoutubePlayer.vue";
import ImageView from "@/components/ImageView.vue";
import ImageUpload from "@/components/ImageUpload.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    YoutubePlayer,
    ImageView,
    ImageUpload,
  },
  setup() {
    const imageList = ref([]);
    const mode = ref("sheet");

    return {
      imageList,
      mode,
    };
  },
};
</script>
<style scoped>
.btn-mode {
  width: 15rem;
  height: 3rem;
  font-size: 22px;
  border: none;
}
.btn-mode:hover {
  transform: scale(1.04);
  transition: 0.5s;
}
</style>
