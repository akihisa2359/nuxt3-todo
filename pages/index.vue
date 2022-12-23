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
          <TheField label="title" name="title" class="mb-m" />
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
      {{ errorMessage }}
      <button @click="openModal(null)">add</button>
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
          <tr v-for="(item, key) in items" :key="item.id">
            <td>{{ key }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td>
            <td>
              <button @click="openModal({ id: key, ...item })">編集</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <TheFooter></TheFooter>
  </div>
</template>

<script setup>
import { Field, Form, defineRule, ErrorMessage } from "vee-validate";
// import { Field, Form, defineRule, ErrorMessage } from "~/libs/vee-validate";
import { required } from "@vee-validate/rules";
import {
  Database,
  getDatabase,
  ref as dbRef,
  set,
  child,
  get,
  push,
  update,
} from "firebase/database";
import { async } from "@firebase/util";

const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);
const items = ref([]);
const item = ref(null);
const isModalVisible = ref(false);
const db = ref(null);
const errorMessage = ref(null);

onMounted(async () => {
  db.value = dbRef(getDatabase());
  const res = await get(child(db.value, "todo"));
  items.value = res.val();
  console.log(res.val());
});

const updateTodo = (values) => {
  const key = push(child(db.value, "todo")).key;

  const res = update(db.value, {
    [`/todo/${key}`]: {
      title: values.title,
      content: values.content,
    },
  });
};

const onSubmit = async (values, actions) => {
  try {
    if (values.id) {
      update(db.value, {
        [`/todo/${values.id}`]: {
          title: values.title,
          content: values.content,
        },
      });
      // todo: 画面に反映
    } else {
      console.log("insert");
    }
    items.value[values.id] = values;
    // actions.resetForm(); // seems this not needed
  } catch (e) {
    // todo: show error by toast
    errorMessage.value = e.message;
  } finally {
    isModalVisible.value = false;
  }
};

const openModal = (values) => {
  item.value = values;
  isModalVisible.value = true;
};

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
