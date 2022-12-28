<template>
  <div>
    {{ counter }}
    <button type="button" @click="counter++">++</button>
    <button type="button" @click="counter--">--</button>
    <NuxtLink to="/test">to test</NuxtLink>
  </div>
</template>

<script setup>
const counter = useCounter("counter");
</script>
