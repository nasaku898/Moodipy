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
@media only screen and (min-width: 0px) {
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
    background: white;
  }
  @media only screen and (min-width: 768px) {
    #app {
      background-image: url(./assets/Frame@2x.png);
      background-size: 100% 100%;
    }
  }
}
</style>
