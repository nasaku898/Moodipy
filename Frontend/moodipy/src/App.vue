<template>
<div>
  <NavBar></NavBar>
  <!-- <OnboardingPage
    v-on:changeEmotion="updateInitialEmotion($event)"
    :initialEmotion="initialEmotion"
  ></OnboardingPage> -->
  <MusicPage></MusicPage>
  <!-- <AboutPage></AboutPage> -->
</div>
</template>

<script>
import MusicPage from "./components/MusicPage/MusicPage";
// import OnboardingPage from "./components/OnboardingPage/OnboardingPage";
import NavBar from "./components/NavBar/NavBar";
// import AboutPage from "./components/AboutPage/AboutPage";

export default {
  name: "App",
  components: {
    // OnboardingPage,
    // AboutPage,
    NavBar,
    MusicPage
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
  #app {
    width: 100%;
    background: rgb(255, 255, 255);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(231, 223, 255, 1) 100%
    );
  }
#app {
  font-family: Montserrat;
  font-style: normal;
}
</style>
