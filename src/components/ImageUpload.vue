<template>
  <div class="row shadow-sm img-upload">
    <div class="img-upload-title py-2">
      上傳樂譜
    </div>
    <div
      class="row g-2 d-flex align-items-start justify-content-center pb-3 px-3"
    >
      <div class="col-auto">
        <input
          class="form-control"
          type="file"
          id="formFile"
          accept="image/*"
          @change="previewImage"
          multiple
        />
        <div class="form-text">上傳檔案限制100MB</div>
      </div>
      <div class="col-auto">
        <button class="btn btn-primary" @click="add">匯入</button>
      </div>
      <div class="d-flex flex-wrap">
        <div
          v-for="(item, index) in previewList"
          :key="index"
          class="ms-1 me-2 img-container"
        >
          <a
            class="delete-image"
            href="#"
            style="display: inline;"
            @click="deleteImg(index)"
            >&#215;</a
          >
          <img :src="item" class="img-thumbnail previewImg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    imageList: {
      type: Array,
    },
  },
  emits: ["update:imageList"],
  setup(props, { emit }) {
    const preview = ref("");
    const image = ref("");
    const previewList = ref([]);

    function add() {
      emit("update:imageList", previewList.value);
    }

    function previewImage(event) {
      console.log(event);
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          preview.value = e.target.result;
          previewList.value.push(preview.value);
        };
        image.value = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    }

    function deleteImg(target) {
      previewList.value.splice(target, 1);
    }

    return {
      preview,
      image,
      previewList,
      previewImage,
      deleteImg,
      add,
    };
  },
};
</script>

<style scoped>
.previewImg {
  max-width: 100px;
  height: 100px;
}

.img-container {
  position: relative;
  float: left;
}

.delete-image {
  display: none;
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 10em;
  padding: 1px 6px 1px;
  text-decoration: none;
  font: 700 16px/20px sans-serif;
  background: #555;
  border: 3px solid #fff;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(0, 0, 0, 0.3);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  -webkit-transition: background 0.5s;
  transition: background 0.5s;
}
.delete-image:hover {
  background: #e54e4e;
  top: -11px;
  right: -11px;
}

.img-upload {
  background-color: #fafafa;
  border-radius: 5px;
}

.img-upload-label {
  color: #fff;
  font-size: 22px;
}

.img-upload-title {
  background-color: #98c1d9;
  color: #000;
  font-size: 22px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
