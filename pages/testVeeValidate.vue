<template>
  <Form :initialValues="item" v-slot="{ values, setFieldValue }">
    {{ values }}
    <div v-for="(c, i) in values.changed.added" :key="i">
      <label>caption</label><br />
      <Field
        :name="`changed.added[${i}].caption`"
        v-slot="{ field }"
        :keepValue="false"
      >
        <input v-bind="field" />
      </Field>
      <label>another</label><br />
      <Field
        :name="`changed.added[${i}].another`"
        v-slot="{ field }"
        :keepValue="true"
      >
        <input v-bind="field" />
      </Field>
    </div>
    <button type="button" @click="onClick(setFieldValue)">change title</button>
    <button type="button" @click="addItem(setFieldValue, values)">add</button>
    <button type="button" @click="deleteItem(setFieldValue)">delete</button>
  </Form>
</template>
<script setup>
import { Field, Form, defineRule, ErrorMessage } from "~/libs/vee-validate";
// import { Field, Form, defineRule, ErrorMessage } from "vee-validate";

const item = ref(null);
item.value = {
  changed: { added: [], deleted: [] },
};

const onClick = (setFieldValue) => {
  setFieldValue("title", "clicked");
};
const addItem = (setFieldValue, values) => {
  const val = [
    ...values.changed.added,
    {
      image: "imageValue",
      caption: "captionValue",
      another: "anotherValue",
    },
  ];
  console.log("set Field", val);
  setFieldValue("changed", { added: val, deleted: [] });
};
const deleteItem = (setFieldValue) => {
  setFieldValue("changed", { added: [], deleted: [] });
};
</script>
