<template>
  <div>
    <!-- component -->
    <viewer images="https://picsum.photos/200/200">
      <img v-for="src in images" :key="src" :src="src" />
    </viewer>
    <!-- api -->
    <!-- <button type="button" @click="show">Click to show</button> -->
  </div>
</template>
<script>
import viewer from "v-viewer";
export default {
  components: { viewer },
  data() {
    return {
      images: [
        "https://picsum.photos/200/200",
        "https://picsum.photos/300/200",
        "https://picsum.photos/250/200",
      ],
    };
  },
  methods: {
    // show() {
    //   this.$viewerApi({
    //     images: this.images,
    //   });
    // },
  },
};
</script>
