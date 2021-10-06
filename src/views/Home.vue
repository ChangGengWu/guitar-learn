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
      <div class="col-md-7 border">樂譜上傳</div>
      <div class="col-md-5"><YoutubePlayer /></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import YoutubePlayer from "@/components/YoutubePlayer.vue";

export default {
  name: "Home",
  components: {
    YoutubePlayer,
  },
};
</script>
