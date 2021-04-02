<template>
  <div id="frame117">
    <h1 id="title">Moodipy: playlists adapted to your mood</h1>
    <p id="description">
      Our goal is to help people identify their emotions through music
    </p>
    <input
      id="input-box"
      v-model="message"
      placeholder="Type your current mood"
    />
    <div v-if="validEntry == false">
      *Please enter a word or a group of word
    </div>
    <br />&nbsp;<br />
    <button id="getStarted" @click="saveInputEmotion(message)">
      Get Started
    </button>
  </div>
</template>

<script>
export default {
  name: "StartPage",
  data() {
    return {
      emotion: "",
      validEntry: true,
    };
  },
  methods: {
    saveInputEmotion(message) {
      if (this.hasNumber(message) || this.message === undefined) {
        this.validEntry = false;
      } else {
        this.emotion = message;
        this.validEntry = true;
      }
    },
    hasNumber(string) {
      return /\d/.test(string);
    },
  },
};
</script>

<style scope>
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

#getStarted {
  background: #6e41e2;
  border-radius: 4px;
  width: 120px;
  height: 44px;
  color: white;
}
</style>