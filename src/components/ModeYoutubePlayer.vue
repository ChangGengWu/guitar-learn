<template>
  <div class="row gx-4">
    <div class="col-7">
      <div class="video-panel shadow-lg px-3 pt-2 pb-1">
        <div class="video-panel-title py-1">
          <i class="bi bi-play-btn"></i>
          影片設定
        </div>
        <div class="p-2">
          <div class="row g-2 align-items-center mb-1">
            <label for="videoURL" class="form-label col-auto">網址</label>
            <div class="col-8">
              <input
                type="text"
                class="form-control"
                id="videoURL"
                aria-describedby="videoURL"
                v-model="videoURL"
                placeholder="https://www.youtube.com/example"
              />
            </div>
            <div class="col-2">
              <button class="btn btn-primary" @click="setVideo">
                完成
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-2">
    <iframe
      frameborder="0"
      scrolling="no"
      type="text/html"
      :src="embedUrl"
      class="video-iframe"
    ></iframe>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import getVideoId from "get-video-id";
export default {
  setup() {
    const videoURL = ref("");
    const videoID = ref("");
    const embedUrl = ref("");

    function setVideo() {
      getchVideoId();
      embedUrl.value = "https://www.youtube.com/embed/" + videoID.value;
    }

    function getchVideoId() {
      const videoInfo = getVideoId(videoURL.value);
      videoID.value = videoInfo.id;
    }

    onMounted(() => {
      // youtubeLoader();
      // console.log("mode");
    });

    return {
      setVideo,
      videoURL,
      embedUrl,
    };
  },
};
</script>

<style scoped>
.customInput {
  width: 5rem;
}

.video-panel {
  background-color: #fafafa;
  border-radius: 15px;
}

.video-panel-title {
  text-align: left;
  color: #344767;
  font-size: 22px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 2px;
}

.video-feature {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
}

.video-feature li {
  margin-right: 1rem;
}

.video-btn {
  font-size: 22px;
}

.video-iframe {
  height: 40rem;
}
</style>
