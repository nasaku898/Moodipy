<template>
<div>
  <NavBar></NavBar>
  <OnboardingPage
    v-on:changeEmotion="updateInitialEmotion($event)"
    :initialEmotion="initialEmotion"
  ></OnboardingPage>
  <!-- <MusicPage></MusicPage> -->
</div>
</template>

<script>
// import MusicPage from "./components/MusicPage/MusicPage";
import OnboardingPage from "./components/OnboardingPage/OnboardingPage";
import NavBar from "./components/NavBar/NavBar";

export default {
  name: "App",
  components: {
    OnboardingPage,
    NavBar,
    // MusicPage
  },
  data() {
    return {
      initialEmotion: "Initial emotion from App",
    };
  },
  methods: {
    updateInitialEmotion(enteredEmotion) {
      this.initialEmotion = enteredEmotion;
    },
  },
};
</script>

<style>
@media only screen and (min-width: 768px) {
  #app {
    /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;*/
    width: 100%;
    height: 100vh;
    background-image: url(./assets/Frame-without-square.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
@media only screen and (max-width: 768px) {
  #app {
    background: #ffffff;
  }
}
#app {
  font-family: Montserrat;
  font-style: normal;
}
</style>
