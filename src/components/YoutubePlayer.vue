<template>
  <div class="row gx-4">
    <div class="col-6">
      <div class="video-panel shadow-lg px-3 pt-3 pb-2">
        <div class="video-panel-title py-2">
          <i class="bi bi-play-btn"></i>
          影片設定
        </div>
        <div class="p-2">
          <div class="row g-2 align-items-center mb-2 mt-1">
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
                placeholder="Youtube URL"
              />
            </div>
          </div>
          <div class="row g-2 align-items-end mb-2">
            <div class="col-auto">
              <label for="startSecond" class="form-label">起始</label>
            </div>
            <div class="col-auto">
              <input
                type="number"
                class="form-control customInput"
                id="startSecond"
                aria-describedby="startSecond"
                v-model.number="startSecond"
                placeholder="Start"
              />
            </div>
            <div class="col-auto">
              <label for="endSecond" class="form-label">結束</label>
            </div>
            <div class="col-auto">
              <input
                type="number"
                class="form-control customInput"
                id="endSecond"
                aria-describedby="endSecond"
                v-model.number="endSecond"
                placeholder="End"
              />
            </div>
            <div class="d-flex w-100 justify-content-end mt-3">
              <button class="btn btn-primary col-auto" @click="setVideo">
                完成
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="col-6" v-if="applyStatus">
        <div class="video-panel shadow-lg p-3">
          <div class="video-panel-title py-2">
            <i class="bi bi-sliders"></i>
            影片功能
          </div>
          <div class="p-2">
            <ul class="video-feature mt-2">
              <!-- 暫停 -->
              <li>
                <button class="btn video-btn btn-pause" @click="pauseVideo">
                  <i class="bi bi-pause"></i>
                </button>
              </li>
              <!-- 播放 -->
              <li>
                <button class="btn video-btn btn-play" @click="playVideo">
                  <i class="bi bi-play"></i>
                </button>
              </li>
              <!-- 回放 -->
              <li>
                <button class="btn video-btn btn-replay" @click="replayVideo">
                  <i class="bi bi-arrow-counterclockwise"></i>
                </button>
              </li>
            </ul>
            <div class="row g-2 align-items-end mb-2 mt-3">
              <div class="col-auto">
                <label for="endSecond" class="form-label">返回時間</label>
              </div>
              <div class="col-auto">
                <input
                  type="number"
                  class="form-control customInput"
                  id="endSecond"
                  aria-describedby="endSecond"
                  v-model="returnSecond"
                />
              </div>
              <button class="btn btn-primary col-auto" @click="seek">
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

  <div class="row mt-3 px-2 justify-content-center">
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
    const applyStatus = ref(false);

    let player;
    function youtubeLoader() {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = function() {
        player = new window.YT.Player("player", {
          height: "370",
          width: "480",
          videoId: "",
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
      applyStatus.value = true;
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

    function pauseVideo() {
      player.pauseVideo();
    }

    function playVideo() {
      player.playVideo();
    }
    function replayVideo() {
      player.seekTo(0);
    }

    function seek() {
      player.seekTo(returnSecond.value);
    }

    function getchVideoId() {
      const videoInfo = getVideoId(videoURL.value);
      videoID.value = videoInfo.id;
    }

    function setSize() {
      player.setSize(600, 700);
    }

    onMounted(() => {
      youtubeLoader();
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
      pauseVideo,
      playVideo,
      replayVideo,
      setSize,
      applyStatus,
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

.btn-play {
  background-color: #166ed2;
  color: #ffffff;
}
.btn-pause {
  background-color: #c20047;
  color: #ffffff;
}
.btn-replay {
  background-color: #f8a96f;
  color: #ffffff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
