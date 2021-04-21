<template>
  <div id="app">
    <section class="hero is-link">
      <div class="hero-body">
        <img id="logo" src="./assets/logo.png" />
        <p class="title">Perceptron</p>
      </div>
    </section>
    <div id="main">
      <Training></Training>
      <Eval></Eval>
    </div>
  </div>
</template>

<script>
import Training from "./components/Training/Training";
import Eval from "./components/Eval/Eval";

export default {
  name: "App",
  components: {
    Training,
    Eval,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 2% 8% 0 8%;
}

#main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#logo {
  width: 3%;
  margin-right: 2%;
}

.hero-body {
  display: flex !important;
  align-items: center !important;
}
.hero {
  border-radius: 15px 15px 0 0;
  margin-bottom: 2em;
}
</style>
