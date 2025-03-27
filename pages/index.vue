<template>
  <div>
    <results />
  </div>
</template>

<script setup>
const API_KEY = "2e468c4ec21862020f301239ac3f8236";
let units = "metric";
const API_URL =
  "https://api.openwexathermap.org/data/2.5/weather?" + units + "=metric&q=";

const city = "aswan";

const main = useMainStore();

main.changeCity("asd");
</script>

<style></style>
