<template>
  <div>
    <div id="title-box">
      <h1 id="title">Moodipy: playlists adapted to your mood</h1>
    </div>
    <div id="description-box">
      <p id="description">Our goal is to help people identify their emotions through music</p>
    </div>
    <input id="input-box" v-model="message" placeholder="Type your current mood"/>
    <br/>&nbsp;<br/>
    <button id="getStarted">Get Started</button>
  </div>
</template>

<script>
  export default {
    name: "StartPage",
    props: {
      msg: String,
    },
  };
</script>