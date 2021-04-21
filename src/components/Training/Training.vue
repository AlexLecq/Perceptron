<template>
  <section class="training">
    <b-menu>
      <b-menu-list label="Training">
        <b-field
          v-for="input of inputs"
          :key="input.property"
          :label="input.label"
        >
          <b-input
            v-model="models[input.property]"
            type="is-info"
          >
          </b-input>
        </b-field>
        <b-field label="Training data">
          <textarea class="textarea" v-model="models['trainingData']" placeholder="e.g 0 0 = 1"></textarea>
        </b-field>
      </b-menu-list>
      <b-button  style="margin-top: 1em;" type="is-link">Train</b-button>
    </b-menu>
  </section>
</template>

<script>
/*input seuil
      input max iteration
      input error minim
      input multiline
      deux input entre 0 et 1
      input coef entrainement
      
      
      */
export default {
  data() {
    return {
      inputs: [
        {
          label: "Minimum error",
          property: "minError",
        },
        {
          label: "Maximum iteration",
          property: "maxIter",
        },
        {
          label: "Threshold",
          property: "threshold",
        },
        {
          label: "Training coefficient",
          property: "trainingCoef",
        },
      ],
      models: {},
    };
  }
};
</script>

<style>
.training {
  border-right: 1px solid rgba(51, 51, 51, 0.5);
  padding: 5%;
}
</style>