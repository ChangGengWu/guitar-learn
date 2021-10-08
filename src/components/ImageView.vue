<template>
  <p v-if="imageList.length <= 0">等待上傳樂譜</p>
  <img v-for="src in imageList" :key="src" :src="src" class="img-fluid" />
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
