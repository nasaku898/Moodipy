<template>
  <MusicPage></MusicPage>
</template>

<script>
import MusicPage from "./components/MusicPage/MusicPage";

export default {
  name: "App",
  components: {
    MusicPage,
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
    background-image: url(./assets/Frame@2x.png);
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
