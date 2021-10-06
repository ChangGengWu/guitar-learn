<template>
  <div class="border p-2">
    <div class="row g-3 align-items-center mb-1">
      <div class="col-auto">
        <label for="videoURL" class="form-label"> 網址</label>
      </div>
      <div class="col-auto">
        <input
          type="text"
          class="form-control"
          id="videoURL"
          aria-describedby="videoURL"
          v-model="videoURL"
        />
      </div>
    </div>
    <div class="row g-3 align-items-center mb-4">
      <div class="col-auto">
        <label for="startSecond" class="form-label">起始</label>
      </div>
      <div class="col-auto">
        <input
          type="text"
          class="form-control customInput"
          id="startSecond"
          aria-describedby="startSecond"
          v-model="startSecond"
        />
      </div>
      <div class="col-auto">
        <label for="endSecond" class="form-label"> 結束</label>
      </div>
      <div class="col-auto">
        <input
          type="text"
          class="form-control customInput"
          id="endSecond"
          aria-describedby="endSecond"
          v-model="endSecond"
        />
      </div>
      <button class="btn btn-primary col-auto" @click="setVideo">Apply</button>
    </div>
    <div class="row g-3 align-items-center mb-2">
      <div class="col-auto">
        <label for="endSecond" class="form-label">返回時間</label>
      </div>
      <div class="col-auto">
        <input
          type="text"
          class="form-control customInput"
          id="endSecond"
          aria-describedby="endSecond"
          v-model="returnSecond"
        />
      </div>
      <button class="btn btn-primary col-auto" @click="seek">seek</button>
    </div>
    {{ startSecond }}{{ endSecond }}
  </div>
  <div class="mt-2">
    <div id="player" keep-alive></div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import getVideoId from "get-video-id";
export default {
  setup() {
    const videoURL = ref("");
    const startSecond = ref();
    const endSecond = ref();
    const videoID = ref("");
    const returnSecond = ref();

    let player;
    function youtubeLoader() {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = function() {
        player = new window.YT.Player("player", {
          height: "300",
          width: "400",
          videoId: "HZ5xd_3yOcQ",
          playerVars: {
            playsinline: 1,
            start: startSecond.value,
            end: endSecond.value,
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
      };
    }

    function setVideo() {
      getchVideoId();
      player.loadVideoById({
        videoId: videoID.value,
        startSeconds: startSecond.value,
        endSeconds: endSecond.value,
      });
    }

    function onPlayerReady(event) {
      event.target.playVideo();
    }

    let done = ref(false);
    function onPlayerStateChange(event) {
      if (event.data == window.YT.PlayerState.PLAYING && !done.value) {
        //setTimeout(stopVideo, 6000);
        done = true;
      }
    }

    // function stopVideo() {
    //   player.stopVideo();
    // }

    function seek() {
      player.seekTo(returnSecond.value);
    }

    function getchVideoId() {
      const videoInfo = getVideoId(videoURL.value);
      videoID.value = videoInfo.id;
    }

    onMounted(() => {
      youtubeLoader();
      console.log("123");
    });

    return {
      youtubeLoader,
      onPlayerReady,
      onPlayerStateChange,
      startSecond,
      endSecond,
      setVideo,
      videoURL,
      seek,
      returnSecond,
    };
  },
};
</script>

<style scoped>
.customInput {
  width: 5rem;
}
</style>
