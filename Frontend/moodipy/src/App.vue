<template>
<div>
  <NavBar></NavBar>
  <router-view></router-view>

</div>
</template>

<script>
import NavBar from "./components/NavBar/NavBar";

export default {
  name: "App",
  components: {
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
    width: 100%;
    height: 100vh;
    position: fixed;
    overflow-y: scroll;
    background: rgb(255, 255, 255);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(231, 223, 255, 1) 100%
    );
  }
}
#app {
  font-family: Montserrat;
  font-style: normal;
}
</style>
