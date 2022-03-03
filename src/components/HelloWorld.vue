<script setup lang="ts">
import ContainerWrapper from "@/components/ContainerWrapper.vue";
</script>

<template>
  <div class="test">
    <h1 data-cy="headline">You did it!</h1>
    <div class="title">
      <h2>SPLI</h2>
      <h2>TTER</h2>
    </div>

    <ContainerWrapper />
  </div>
</template>

<style scoped>
.test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  margin-top: 6.5rem;
  margin-left: 0;
}

.title {
  margin-top: 0.55rem;
}

h2 {
  margin: 0;
  letter-spacing: 0.7rem;
  font-size: 1.4rem;
  line-height: 1.65;
  margin-left: 0.75rem;
}
</style>
