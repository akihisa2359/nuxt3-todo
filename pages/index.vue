<template>
  <div>
    <TheModal v-if="isModalVisible" @close="isModalVisible = false">
      <div style="width: 250px; padding: 24px">
        <Form
          v-slot="{ values, errors }"
          :initialValues="item"
          @submit="onSubmit"
        >
          {{ values }}
          <br />
          <!-- <Field name="title" rules="required" />
            <ErrorMessage name="title" /> -->
          <TheField label="title" name="name" rules="required" class="mb-m" />
          <TheTextField
            label="content"
            name="content"
            class="mb-m"
            :height="200"
          />
          <button
            :disabled="Object.keys(errors).length >= 1"
            class="button success"
          >
            save
          </button>
        </Form>
      </div>
    </TheModal>
    <div class="header">
      <h1 class="py-l">todo</h1>
    </div>
    <div class="container">
      <h1 class="hoge">test</h1>
      <button @click="addTodo">add</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>content</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td>
            <td><button @click="updateTodo(item)">編集</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <TheFooter></TheFooter>
  </div>
</template>

<script setup>
import { Field, Form, defineRule, ErrorMessage } from "vee-validate";
import { required } from "@vee-validate/rules";
import {
  Database,
  getDatabase,
  ref as fbref,
  set,
  child,
  get,
} from "firebase/database";

const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);
// console.log(process.env.TEST_VALUE);
const items = ref([]);
const item = ref(null);
const isModalVisible = ref(false);

const addTodo = () => {
  console.log("add todo");
  item.value = {
    name: "",
    age: "",
  };
  isModalVisible.value = true;
};

const updateTodo = (values) => {
  item.value = values;
  isModalVisible.value = true;
};

const onSubmit = (values) => {
  console.log(values);
  const item = { id: items.value.length + 1, ...values };
  items.value.push(item);
};

items.value = [
  { id: 1, title: "maki", content: "content" },
  { id: 2, title: "moto", content: "content" },
];

defineRule("required", required);

const dbRef = fbref(getDatabase());
get(child(dbRef, "todo"))
  .then((snapshot) => {
    console.log(snapshot.val());
  })
  .catch((error) => {
    console.log(error);
  });

const key = push(child(dbRef, "todo")).key;
const res = update(dbRef, {
  ["/todo/" + key]: {
    title: "title",
    content: "content from app",
  },
});
console.log(res);
</script>

<style lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
table th,
table td {
  text-align: center;
}
table tbody tr:nth-child(odd) {
  background-color: #eee;
}
</style>
