<template>
  <div class="bar">
    <h1 class="header">Barコンポーネント</h1>
    <p>これはBarコンポーネントです。</p>
    <foo />
  </div>
</template>

<script>
import Foo from "./foo.vue";
export default {
  components: { Foo },
};
</script>

<style scope>
.bar {
  border: solid 1px red;
  margin: 4px;
  padding: 4px;
}
.header {
  font-size: 125%;
}
</style>