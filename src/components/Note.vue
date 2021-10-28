<template>
  <div class="d-flex justify-content-end mb-2">
    <div class="me-3">
      {{ errorMessage }}
      <input type="file" ref="file" class="d-none" @change="handleFileUpload" />
      <button class="btn btn-danger" @click="$refs.file.click()">
        <i class="bi bi-upload me-2"></i>上傳
      </button>
    </div>
    <div class="">
      <button class="btn btn-warning" @click="exportMdFile">
        <i class="bi bi-download me-2"></i>輸出
      </button>
    </div>
  </div>
  <div class="row md-container wrap">
    <vue-simplemde
      ref="markdownEditor"
      preview-class="markdown-body"
      class="col-lg-12 md-textarea"
      v-model="source"
    />
  </div>
</template>

<script>
// import Markdown from "vue3-markdown-it";
import "highlight.js/styles/monokai.css";
import VueSimplemde from "vue-simplemde";
import { ref } from "vue";
import { saveAs } from "file-saver";
export default {
  components: {
    // Markdown,
    VueSimplemde,
  },
  setup() {
    const source = ref("# Hello World!");
    const file = ref(null);
    const errorMessage = ref("");
    // const mdMode = ref("all");

    //輸出md檔
    function exportMdFile() {
      var FileSaver = require("file-saver");
      var blob = new Blob([source.value], { type: "text/plain;charset=utf-8" });
      FileSaver.saveAs(blob, "MarkdownFile.md");
    }

    //上傳md檔
    function handleFileUpload(event) {
      file.value = file.value.files[0];
      console.log(file.value.name);
      var input = event.target;
      if (file.value.name.includes(".md") || file.value.name.includes(".txt")) {
        var reader = new FileReader();
        reader.onload = (e) => {
          source.value = e.target.result;
          errorMessage.value = "";
          // console.log(e.target.result);
        };
      } else {
        errorMessage.value = "不支援的檔案類型(僅接受 .md .txt 檔案格式)";
        console.log("不支援的檔案類型");
      }
      reader.onerror = (err) => console.log(err);
      reader.readAsText(input.files[0]);
    }
    return {
      source,
      saveAs,
      exportMdFile,
      handleFileUpload,
      file,
      errorMessage,
      // mdMode,
    };
  },
};
</script>

<style>
@import "~simplemde/dist/simplemde.min.css";
@import "~github-markdown-css";
/* .md-filter {
  list-style: none;
  padding: 0;
  margin: 0;
}

.md-filter li {
  font-size: 22px;
  padding: 0.2rem 2rem;
  border: 1px solid #000000;
  border-radius: 1px;
}

.md-filter .active {
  background-color: #457b9d;
  color: #ffffff;
  transition: 0.5s ease-out;
} */

.md-container {
  height: 52rem;
  overflow: hidden;
}

.md-textarea {
  height: 100%;
}

.vue-simplemde .CodeMirror {
  height: 46rem;
}

.md-body {
  height: 94.2%;
  overflow: auto;
  background-color: #ffffff;
}
</style>
