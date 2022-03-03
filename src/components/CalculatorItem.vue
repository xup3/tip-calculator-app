<script setup lang="ts">
const reset = () => {
  console.log("RESET ALL FIELDS");
};
</script>

<template>
  <div class="calculator-container">
    <div>
      <div class="text">
        Tip Amount
        <div class="subtext">/ person</div>
      </div>
      <div class="amount">$0.00</div>
    </div>
    <div>
      <div class="text">
        Total
        <div class="subtext">/ person</div>
      </div>
      <div class="amount">$0.00</div>
    </div>

    <button v-on:click="reset" data-cy="reset">RESET</button>
  </div>
</template>

<style lang="scss">
.calculator-container {
  background: #12474b;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;

  button {
    border-radius: 1rem;
  }
}
</style>
