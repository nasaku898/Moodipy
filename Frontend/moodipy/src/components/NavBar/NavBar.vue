<template>
  <div id="menubar">
    <router-link to="/" class="link">
      <img id="logo" src="../../assets/moodipyLogo.png" alt="Moodipy Logo" />
      <p id="name">MOODIPY</p>
    </router-link>
    <router-link to="/about" class="link">
      <button id="about">About</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
#menubar {
  background-color: transparent;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  margin: 10px;
  vertical-align: middle;
}

#name {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  position: absolute;
  top: 0px;
  left: 50px;
}

#logo {
  height: 40px;
  width: 40px;
  margin: 5;
  padding-right: 10px;
  padding-top: 5px;
}

#about {
  position: absolute;
  right: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  margin-top: 5px;
  width: 83px;
  height: 40px;
  background: #6e41e2;
  border-radius: 4px;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}
</style>