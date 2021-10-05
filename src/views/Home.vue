<template>
  <YoutubePlayer />
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
