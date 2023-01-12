<template>
  <div>
    <button type="button" @click="addToast">add toast</button>
    <button type="button" @click="addSuccessToast">add success toast</button>
  </div>
</template>

<script setup>
const { toast } = useToast();
const addToast = () => {
  toast("hogeに成功しました", "success");
  console.log(toast.toasts.value);
};

const addSuccessToast = () => {
  toast.success("hoge success");
};
</script>
