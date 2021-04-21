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
      <Main></Main>
      <Eval></Eval>
    </div>
  </div>
</template>

<script>
import Main from "./components/Main/Main";
import Training from "./components/Training/Training";
import Eval from "./components/Eval/Eval";
export default {
  name: "App",
  components: {
    Main,
    Training,
    Eval
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 5% 8% 0 8%;
}

#main {
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.2fr;
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
