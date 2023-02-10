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
      hoge
      {{ new Date() }}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>content</th>
            <th>updated_at</th>
            <th>created_at</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id" draggable="true">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td>
            <td>{{ item.updated_at }}</td>
            <td>{{ item.created_at }}</td>
            <td>
              <button @click="openModal(item)">編集</button>
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
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import anyName, { hoge } from "~/libs/hoge";
import { useToast2 } from "~~/components/toasts";
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

  db = getFirestore();
  const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
    items.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  isLoading.value = false;
});

const onSubmit = async (values, actions) => {
  try {
    isLoading.value;
    const date = new Date();
    console.log(values.id);

    if (values.id) {
      const res = await setDoc(doc(db, "tasks", values.id), {
        title: values.title,
        content: values.content,
        updated_at: date,
      });
      useToast2().success("タスクの更新に成功しました");
    } else {
      const res = await addDoc(collection(db, "tasks"), {
        title: values.title,
        content: values.content,
        created_at: date,
        updated_at: date,
      });
      useToast2().success("タスクの登録に成功しました");
    }
  } catch (e) {
    console.log(e);
    useToast2().error("タスクの登録に失敗しました");
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
