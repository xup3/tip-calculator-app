<script setup lang="ts">
import FormItem from "@/components/FormInput.vue";
import CalculatorItem from "@/components/CalculatorItem.vue";
</script>

<template>
  <div class="container">
    <FormItem />
    <CalculatorItem />
  </div>
</template>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  gap: 2.6rem;
  margin-top: 4.75rem;
}
</style>
