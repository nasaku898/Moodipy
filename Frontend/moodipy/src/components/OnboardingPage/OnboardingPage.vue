<template>
  <div id="frame117">
    <h1 id="title">Moodipy: playlists adapted to your mood</h1>
    <p id="description">
      Our goal is to help people identify their emotions through music
    </p>
    <input
      id="input-box"
      v-model="inputEmotion"
      placeholder="Type your current mood"
    />
    <div id="errorMsg" v-if="validEntry == false">
      *Please enter a word or a group of word
    </div>
    <div class="modal" v-if="!spotifyLoggedIn">
      <p>This application requires a Spotify account.</p>
      <p>Please click the button to be redirected to Spotify login page</p>
      <button class="btn" @click="redirectToSpotifyLogin()">Login</button>
    </div>
    <br />&nbsp;<br />
    <button class="btn" v-on:click="changeEmotion(inputEmotion)">
      Get Started
    </button>
    <!-- print initial emotion of app.vue for for debug puposes -->
    <p>{{ $store.state.initialEmotion }}</p>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";

export default {
  name: "OnboardingPage",
  props: ["initialEmotion"],
  data() {
    return {
      validEntry: true,
      spotifyLoggedIn: true,
    };
  },
  methods: {
    changeEmotion(inputEmotion) {
      if (
        this.hasNumber(inputEmotion) ||
        this.inputEmotion === undefined ||
        this.inputEmotion === ""
      ) {
        this.validEntry = false;
      } else {
        this.$store.commit("updateInitialEmotion", inputEmotion);
        this.validEntry = true;
        localStorage.setItem("initialEmotion", inputEmotion);
        router.push("/music");
      }
    },
    hasNumber(string) {
      return /\d/.test(string);
    },
    redirectToSpotifyLogin() {
      window.location = "http://localhost:8888/spotify/login";
    },
  },
  beforeMount() {
    axios.get("http://localhost:8888/spotify/status").catch((err) => {
      if (err.response.status === 404) {
        this.spotifyLoggedIn = false;
      }
    });
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  min-height: 80%;
  width: 100%;
  max-width: 600px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  border-radius: 8px;
  border: solid 1px #6e41e2;
  padding: 25px;
  align-items: center;
  display: flex;
  flex-direction: column;
}
#frame117 {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

@media only screen and (max-width: 768px) {
  #title,
  #description,
  #input-box {
    width: 80%;
  }
}

@media screen and (min-width: 768px) {
  #title {
    position: static;
    width: 566px;
    height: 192px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 64px;
    margin: 22px 0px;
  }
  #description {
    position: static;
    width: 566px;
  }
  #input-box {
    width: 482px;
    margin: 12px 0px;
  }
}

#description,
#input-box {
  font-family: Roboto;
  font-size: 16px;
}

#input-box {
  border: 0px solid;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  height: 56px;
  padding-left: 10px;
}

#input-box:focus {
  outline: none !important;
}

.btn {
  background: #6e41e2;
  border-radius: 4px;
  width: 120px;
  height: 44px;
  color: white;
}

#errorMsg {
  width: 90%;
  text-align: center;
}
</style>