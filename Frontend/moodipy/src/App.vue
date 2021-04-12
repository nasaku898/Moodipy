<template>
<div>
  <NavBar></NavBar>
  <!-- <OnboardingPage
    v-on:changeEmotion="updateInitialEmotion($event)"
    :initialEmotion="initialEmotion"
  ></OnboardingPage> -->
  <router-view></router-view>
  <!-- <AboutPage></AboutPage> -->
</div>
</template>

<script>
// import OnboardingPage from "./components/OnboardingPage/OnboardingPage";
import NavBar from "./components/NavBar/NavBar";
// import AboutPage from "./components/AboutPage/AboutPage";


export default {
  name: "App",
  components: {
    // OnboardingPage,
    // AboutPage,
    NavBar,
  },
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>

<style>
.link{
  text-decoration: none;
  color: inherit;
}

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
    position: fixed;
    overflow-y: scroll;
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
