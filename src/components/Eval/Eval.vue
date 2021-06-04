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
        <b-message type="is-success" v-if="result !== null">
          <strong>Result: </strong> {{ result }}
        </b-message>
      </b-menu-list>
    </b-menu>
    <b-button @click="evalData()" style="margin-top: 1em" type="is-link"
      >Eval</b-button
    >
  </section>
</template>

<script>
import Perceptron from "../../core/percetron";
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
  methods: {
    evalData: function () {
      let weights = Perceptron.loadWeights();
      if (!weights) {
        this.$buefy.toast.open({
          duration: 3000,
          message: `Need training before eval`,
          position: "is-top",
          type: "is-danger",
        });
        return;
      }

      if((this.models["x0"] !== '0' && this.models["x0"] !== '1') || (this.models["x1"] !== '0' && this.models["x1"] !== '1')){
        this.$buefy.toast.open({
          duration: 3000,
          message: `data must be equal to 0 or 1`,
          position: "is-top",
          type: "is-danger",
        });
        return;
      }
      this.result = Perceptron.evaluate(
        [this.models["x0"], this.models["x1"], 1],
        weights,
        Perceptron.loadThreshold()
      );
    },
  },
};
</script>

<style>
.eval {
  border-left: 1px solid rgba(51, 51, 51, 0.5);
  padding: 5%;
}
</style>