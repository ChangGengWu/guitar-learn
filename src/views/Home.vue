<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        Guitar Learn
      </a>
    </div>
  </nav>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-8 col-xl-7 border">
        <ImageView v-model:imageList="imageList" />
      </div>
      <div class="col-md-4 col-xl-5">
        <div>
          <ImageUpload v-model:imageList="imageList" />
        </div>

        <!-- {{ imageList }} -->
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
export default {
  name: "Home",
  components: {
    YoutubePlayer,
    ImageView,
    ImageUpload,
  },
  data() {
    return {
      favorite_count: 0,
      firstName: "",
      imageList: [],
    };
  },
};
</script>
