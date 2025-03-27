<template>
  <div class="w-screen h-screen bg-gradient-to-b from-[#006acc] to-[#40E0D0]">
    <div class="container mx-auto">
      <input-field />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import inputField from "~/components/input-field.vue";
export default {
  components: { inputField },
};

// #003366
// #40E0D0
// #2E8B57
</script>

<style></style>
