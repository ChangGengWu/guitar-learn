<template>
  <div class="d-flex justify-content-center align-item-center">
    <div v-if="imageList.length <= 0" class="loading-area">
      <loading
        loader="dots"
        v-model:active="isLoading"
        :can-cancel="true"
        :on-cancel="onCancel"
        :is-full-page="fullPage"
        background-color="#f8f9fa"
      />
      <!-- <template #default v-if="useSlot">
          <h3>等待上傳樂譜</h3>
        </template> -->
    </div>
    <img v-for="src in imageList" :key="src" :src="src" class="img-fluid" />
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  components: {
    Loading,
  },
  props: {
    imageList: {
      type: Array,
    },
  },
  data() {
    return {
      images: ["https://picsum.photos/700/900"],
      isLoading: true,
      fullPage: false,
      useSlot: true,
    };
  },
  methods: {
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
  },
};
</script>
<style scoped>
img {
  width: 700px;
  height: 900px;
}
.loading-area {
  position: relative;
  height: 30rem;
  width: 30rem;
}
</style>
