<template>
  <div>
    <h1>OptionsApi</h1>
    <p>title: {{ title }}</p>
    <p>content: {{ content }}</p>
    <p>data: {{ data }}</p>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "OptionsApiTest",
  props: ["title", "content"],
  data() {
    return { data: "hoge" };
  },
  mounted() {
    console.log(this.title); // propsの値をthisで参照できる
  },
});
</script>
