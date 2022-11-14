<template>
  <div>
    <TheModal v-if="modalShown" @close="modalShown = false">
      <Form>
        <!-- <Field name="title" rules="required" />
        <ErrorMessage name="title" /> -->
        <TheField label="title" name="name" rules="required" class="mb-m" />
        <TheTextField
          label="content"
          name="content"
          class="mb-m"
          :height="200"
        />
        <button class="button success">save</button>
      </Form>
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
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
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

const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);
// console.log(process.env.TEST_VALUE);
const items = ref([]);
const modalShown = ref(false);

const addTodo = () => {
  console.log("add todo");
  modalShown.value = true;
};

items.value = [
  { id: 1, name: "maki", age: 26 },
  { id: 2, name: "moto", age: 26 },
];

defineRule("required", required);
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
