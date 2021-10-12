<template>
  <div class="d-flex justify-content-center">
    <div v-if="imageList.length <= 0">
      <p>等待上傳樂譜</p>
    </div>
    <img v-for="src in imageList" :key="src" :src="src" class="img-fluid" />
  </div>
</template>
<script>
export default {
  props: {
    imageList: {
      type: Array,
    },
  },
  data() {
    return {
      images: ["https://picsum.photos/700/900"],
    };
  },
};
</script>
<style scoped>
img {
  width: 700px;
  height: 900px;
}
</style>
