<script setup lang="ts">
import { reactive, onMounted } from "vue";

const { count, people, tip } = reactive({
  count: 0,
  people: 0,
  tip: 0,
});

const user: User = {
  name: "Daniel",
  id: 1
}

onMounted(() => {
  console.log("Test", user)
});

const checkedNames = reactive([]);

function calculate(): number {
  return 0;
}

function disableOtherCheckboxes(e: Event): void {
  const t = (<HTMLInputElement>e.target);

  checkedNames.map(val => {
    console.log(document.querySelector(`input[name=perc_${val}]`).name);
  });
}
</script>

<template>
  <div>
    <form @submit.prevent="calculate" class="form-container">
      <label>
        Bill
        <input type="number" name="bill" v-model="count" pattern="[0-9]+([\..][0-9]+)?" step="1.00" />
      </label>
      <div>
        <label>
          Select Tip %
          <input
            type="checkbox"
            value="5"
            name="perc_5"
            data-cy="perc_5"
            v-model="checkedNames"
            v-on:change="disableOtherCheckboxes"
          />
          <input
            type="checkbox"
            value="10"
            name="perc_10"
            v-model="checkedNames"
            v-on:change="disableOtherCheckboxes"
          />
          <input
            type="checkbox"
            value="15"
            name="perc_15"
            v-model="checkedNames"
            v-on:change="disableOtherCheckboxes"
          />
          <input
            type="checkbox"
            value="25"
            name="perc_25"
            v-model="checkedNames"
            v-on:change="disableOtherCheckboxes"
          />
          <input
            type="checkbox"
            value="50"
            name="perc_50"
            v-model="checkedNames"
            v-on:change="disableOtherCheckboxes"
          />
          <input type="number" name="perc_custom" v-model="tip" />
        </label>
      </div>
      <label>
        Number of People
        <input type="number" name="people" v-model="people" />
      </label>
    </form>
  </div>
</template>

<style lang="scss">
.form-container {
  display: flex;
  flex-direction: column;
  padding: 0.85rem;

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.95rem;
    font-weight: bold;
    margin-bottom: 2.65rem;
  }

  input {
    margin-top: 0.5rem;
    font-family: "Space Mono", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 3px;
    background: lightgray;
    border: 0;
    padding: 0.3rem 0rem;
    text-align: right;
    min-width: 380px;
  }
}
</style>
