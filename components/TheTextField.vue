<template>
  <div>
    <Field :name="name" :rules="rules" v-slot="{ field, errorMessage }">
      <label>{{ label }} <span v-if="isRequired">必須</span> </label><br />
      <textarea
        v-bind="field"
        :class="inputClass"
        :placeholder="placeholder"
        :style="`height: ${height}px`"
      ></textarea>
      <span>{{ errorMessage }}</span>
    </Field>
  </div>
</template>

<script setup>
import { Field } from "vee-validate";

const props = defineProps({
  name: { default: "" },
  label: { default: "label" },
  rules: { default: "" },
  placeholder: { default: "" },
  inputClass: { default: "" },
  height: { default: 100 },
});

const isRequired = computed(() => props.rules.split("|").includes("required"));
</script>

<style scoped lang="scss">
span {
  font-size: 0.5rem;
  color: red;
}
textarea {
  width: 100%;
  max-height: 500px;
}
</style>
