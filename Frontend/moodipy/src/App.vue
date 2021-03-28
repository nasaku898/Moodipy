<template>
<<<<<<< HEAD
<div>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->   
  <OnboardingPage msg="Welcome to Your Vue.js App"/>
</div>
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import OnboardingPage from './components/OnboardingPage/OnboardingPage.vue'
=======
  <MusicPage></MusicPage>
</template>

<script>
import MusicPage from './components/MusicPage/MusicPage'
>>>>>>> 841b0ff4e903895ac279452ec0a1516c5ac94fd8

export default {
  name: 'App',
  components: {
<<<<<<< HEAD
    // HelloWorld,
    OnboardingPage
  }
=======
    MusicPage
  },
>>>>>>> 841b0ff4e903895ac279452ec0a1516c5ac94fd8
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: Montserrat;
  font-style: normal;
  /*
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
  width: 100%;
  height: 100vh;
  background-image: url(./assets/Frame@2x.png);
  background-size: 2100px 1180px;
}
</style>
