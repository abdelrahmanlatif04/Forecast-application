<template>
  <div class="w-full h-11 flex justify-center gap-2 items-center">
    <input
      type="text"
      placeholder="City"
      class="focus:outline-none text-white bg-white/20 focus:bg-white/40 w-full max-w-lg min-w-sm rounded-3xl py-2 pl-4 pr-1 text-lg"
      v-model="city"
    />
    <button
      @click="mainStore.changeCity(city)"
      class="h-full aspect-square bg-white rounded-full cursor-pointer transition-all hover:opacity-60 flex justify-center items-center opacity-80"
    >
      <img src="/search.png" class="w-2/3" />
    </button>
  </div>
</template>

<script setup>
let mainStore = useMainStore();
let city = ref(null);
</script>

<style></style>
