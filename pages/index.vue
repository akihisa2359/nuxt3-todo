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
    <Header style="margin-bottom: 24px" />
    <!-- <div class="header">
      <h1 class="py-l">todo</h1>
    </div> -->
    <div class="container">
      <!-- <h1 class="hoge">test</h1> -->
      {{ errorMessage }}
      <button @click="openModal(null)">add</button>
      <div class="scroll-table">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>content</th>
              <th>
                <div class="sortable">
                  updated_at
                  <Sort
                    size="small"
                    @sortChanged="changeSort('updated_at')"
                    :sort="
                      currentSort.key === 'updated_at' ? currentSort.type : ''
                    "
                  />
                </div>
              </th>
              <th>
                <div class="sortable">
                  created_at
                  <Sort
                    size="small"
                    @sortChanged="changeSort('created_at')"
                    :sort="
                      currentSort.key === 'created_at' ? currentSort.type : ''
                    "
                  />
                </div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in sortedItems" :key="item.id" draggable="false">
              <td>{{ item.id }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.content }}</td>
              <td>
                {{
                  formatDate(item.updated_at.toDate(), "yyyy/MM/dd HH:mm:ss")
                }}
                <!-- {{ item.updated_at }} -->
              </td>
              <td>
                {{
                  formatDate(item.created_at.toDate(), "yyyy/MM/dd HH:mm:ss")
                }}
                <!-- {{ item.created_at }} -->
              </td>
              <td>
                <button @click="openModal(item)">編集</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
  addDoc,
  updateDoc,
} from "firebase/firestore";
import anyName, { hoge } from "~/libs/hoge";
import { useToast2 } from "~~/components/toasts";
import { formatDate } from "~/libs/datetime";
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
const currentSort = ref({ key: "created_at", type: "asc" });
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
      const docRef = doc(db, "tasks", values.id);
      await updateDoc(docRef, {
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

const changeSort = (clickedKey) => {
  const { key, type } = currentSort.value;
  if (key === clickedKey) {
    currentSort.value.type = type === "asc" ? "desc" : "asc";
  } else {
    currentSort.value = { key: clickedKey, type: "asc" };
  }
};

const sortedItems = computed(() => {
  const { key, type } = currentSort.value;
  const getValue = (v) => {
    return "seconds" in v ? v.seconds : v;
  };
  const calc = (a, b) => {
    return type === "desc" ? a - b : b - a;
  };
  return items.value.sort((a, b) => {
    return calc(getValue(a[key]), getValue(b[key]));
  });
});

defineRule("required", required);
</script>

<style lang="scss">
.scroll-table {
  overflow-x: scroll;
  white-space: nowrap;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
table th,
table td {
  text-align: center;
  padding: 0 12px;
}
table tbody tr:nth-child(odd) {
  background-color: #eee;
}

table .sortable {
  display: flex;
  justify-content: space-evenly;
}
</style>
