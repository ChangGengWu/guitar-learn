<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        Guitar Learn
      </a>
    </div>
  </nav>
  <div class="container-fluid px-3">
    <div class="row mt-4 g-0">
      <div class="col-md-8 col-xl-7 mb-3">
        <ul class="nav nav-tabs">
          <li class="nav-item mode-tab" aria-current="page">
            <a
              class="nav-link sheet-link"
              aria-current="page"
              href="#"
              @click.prevent="mode = 'sheet'"
              :class="{ active: mode === 'sheet' }"
            >
              <i class="bi bi-music-note-list"></i> 樂譜</a
            >
          </li>
          <li class="nav-item mode-tab" aria-current="page">
            <a
              class="nav-link video-link"
              aria-current="page"
              href="#"
              @click.prevent="mode = 'video'"
              :class="{ active: mode === 'video' }"
            >
              <i class="bi bi-play-btn"></i>
              影片</a
            >
          </li>
          <li class="nav-item mode-tab" aria-current="page">
            <a
              class="nav-link note-link"
              aria-current="page"
              href="#"
              @click.prevent="mode = 'note'"
              :class="{ active: mode === 'note' }"
            >
              <i class="bi bi-journal-text"></i>
              筆記</a
            >
          </li>
        </ul>
      </div>
      <div class="col-md-8 col-xl-7 border" v-if="mode === 'sheet'">
        <ImageView v-model:imageList="imageList" />
      </div>
      <div class="col-md-8 col-xl-7" v-if="mode === 'video'">
        <ModeYoutubePlayer />
      </div>
      <div class="col-md-8 col-xl-7" v-if="mode === 'note'">
        <Note />
      </div>
      <div class="col-md-4 col-xl-5">
        <div class="px-5">
          <transition name="slide-fade">
            <div v-if="mode === 'sheet'">
              <ImageUpload v-model:imageList="imageList" />
            </div>
          </transition>
          <transition name="fade">
            <div class="mt-4">
              <YoutubePlayer />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import YoutubePlayer from "@/components/YoutubePlayer.vue";
import ModeYoutubePlayer from "@/components/ModeYoutubePlayer.vue";
import ImageView from "@/components/ImageView.vue";
import ImageUpload from "@/components/ImageUpload.vue";
import Note from "@/components/Note.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    YoutubePlayer,
    ImageView,
    ImageUpload,
    Note,
    ModeYoutubePlayer,
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
.setting-area {
  border-radius: 5px;
  background-color: #fff;
}

.nav-item > a {
  color: #344767;
}

.mode-tab {
  font-size: 19px;
  letter-spacing: 2px;
}

a.active.nav-link {
  background-color: inherit !important;
  color: #000000;
}

.mode-area {
  background-color: #ffffff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.transitrion {
  transition: all 2s ease;
}
</style>
