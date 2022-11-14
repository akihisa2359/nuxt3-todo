<template>
  <div>
    <Field :name="name" :rules="rules" v-slot="{ field, errorMessage }">
      <label>{{ label }} <span v-if="isRequired">必須</span> </label><br />
      <input v-bind="field" :class="inputClass" :placeholder="placeholder" />
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
});

const isRequired = computed(() => props.rules.split("|").includes("required"));
</script>

<style scoped lang="scss">
span {
  font-size: 0.5rem;
  color: red;
}
input {
  width: 100%;
}
</style>
