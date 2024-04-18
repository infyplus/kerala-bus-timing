<template>
    <div>
        <h1>Hi</h1>
        <Rating v-model="value" />
    </div>
</template>
<script setup lang="ts">

let value = ref(1)

onMounted(() => {
    fetch("api/hello").then((data) => console.log(data))
})
</script>