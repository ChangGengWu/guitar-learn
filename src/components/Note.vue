<template>
  <ul class="d-flex md-filter mb-2">
    <li :class="{ active: mdMode === 'write' }">
      <a @click="mdMode = 'write'"><i class="bi bi-pencil"></i></a>
    </li>
    <li :class="{ active: mdMode === 'all' }">
      <a @click="mdMode = 'all'"
        ><i class="bi bi-layout-text-sidebar-reverse"></i
      ></a>
    </li>
    <li :class="{ active: mdMode === 'read' }">
      <a @click="mdMode = 'read'"><i class="bi bi-eye"></i></a>
    </li>
  </ul>

  <div class="row md-container">
    <textarea
      v-model="source"
      class="col-6 md-textarea"
      rows="30"
      v-if="mdMode === 'all' || mdMode === 'write'"
      :class="{ 'col-12': mdMode === 'write' }"
    ></textarea>
    <div
      class="col-6 border md-body p-3"
      v-if="mdMode === 'all' || mdMode === 'read'"
      :class="{ 'col-12': mdMode === 'read' }"
    >
      <Markdown :source="source" />
    </div>
  </div>
</template>

<script>
import Markdown from "vue3-markdown-it";
import "highlight.js/styles/monokai.css";
import { ref } from "vue";
export default {
  components: {
    Markdown,
  },
  setup() {
    const source = ref("# Hello World!");
    const mdMode = ref("all");
    return {
      source,
      mdMode,
    };
  },
};
</script>

<style>
.md-filter {
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
}

.md-container {
  height: 52rem;
  overflow: hidden;
}

.md-textarea {
}

.md-body {
  height: 100%;
  overflow: auto;
}
</style>
