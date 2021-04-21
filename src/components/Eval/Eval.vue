<template>
  <section class="eval">
    <b-menu>
      <b-menu-list label="Eval">
        <b-field
          v-for="input of inputs"
          :key="input.property"
          :label="input.label"
        >
          <b-input v-model="models[input.property]" type="is-info"> </b-input>
        </b-field>
        <b-field v-if="result" label="Result">
          <p>{{ result }}</p>
        </b-field>
      </b-menu-list>
    </b-menu>
    <b-button style="margin-top: 1em" type="is-link">Eval</b-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      inputs: [
        {
          label: "X0",
          property: "x0",
        },
        {
          label: "X1",
          property: "x1",
        },
      ],
      models: {},
      result: null,
    };
  },
};
</script>

<style>
.eval {
  border-left: 1px solid rgba(51, 51, 51, 0.5);
  padding: 5%;
}
</style>