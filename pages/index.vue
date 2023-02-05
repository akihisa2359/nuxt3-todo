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
          {{
            items
          }}
          <tr v-for="(item, key) in items">
            {{
              item
            }}
            {{
              key
            }}
            <!-- <td>{{ key }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td> -->
            <td>
              <!-- <button @click="openModal({ id: key, ...item })">編集</button> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <TheFooter></TheFooter>
    <Spinner v-if="isLoading" />
  </div>
</template>

<script setup>
import { Field, Form, defineRule, ErrorMessage } from "vee-validate";
// import { Field, Form, defineRule, ErrorMessage } from "~/libs/vee-validate";
import { required } from "@vee-validate/rules";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import anyName, { hoge } from "~/libs/hoge";
hoge();
const res = useCounter("counter");

const emit = defineEmits(["call"]);

const isLoading = ref(false);
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);
// ex) items = {
//   id1: { title: "title", content: "content" },
//   id2: { title: "title", content: "content" },
// };
const items = ref([]);
const item = ref(null);
const isModalVisible = ref(false);
const errorMessage = ref(null);
let db = null;

onMounted(async () => {
  isLoading.value = true;

  const db = getFirestore();
  const snapshot = await getDocs(collection(db, "tasks"));
  console.log(snapshot);
  snapshot.forEach((doc) => {
    items.value.push({ [doc.id]: doc.data() });
    console.log(`${doc.id} => ${doc.data()}`);
  });
  isLoading.value = false;
});

const onSubmit = async (values, actions) => {
  try {
    isLoading.value;
    console.log(values.id);
    const id = values.id || push(child(db, "todo")).key;
    console.log(id);
    await update(db, {
      [`/todo/${id}`]: {
        title: values.title,
        content: values.content,
      },
    });
    items.value[id] = values;
    emit("call");
    // actions.resetForm(); // seems this not needed
  } catch (e) {
    // todo: show error by toast
    errorMessage.value = e.message;
  } finally {
    isModalVisible.value = false;
    isLoading.value = false;
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
