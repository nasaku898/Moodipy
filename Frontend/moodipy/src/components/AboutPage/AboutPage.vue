<template>
  <div id="frame117">
    <h1 id="title">About Us</h1>
    <br />
    <p id="description">
      Moodipy is a free to use application developped by five university
      students. The goal of this application is to help people identify their
      emotions. At the same time, the goal is to show music playlists based on
      the mood of the user.
      <br /><br />
      Emotions help us know what we want or don’t want. Knowing our emotions
      allow us to be in control of ourselves and have a clearer state of mind.
      This provides us with the capability of making decisions rationally and
      not a decision motivated by some sort of unknown emotion.
      <br /><br />
      This application was developped for research purposes. The information
      provided to the application is not saved, except if the user voluntarily
      agrees to share their feedback. The picture uploaded to this website are
      not saved.
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scope>
#frame117 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  padding-top: 15%;
}

@media only screen and (max-width: 769px) {
  #title {
    margin: auto;
    margin-top: 40px;
  }
  #description {
    width: 90%;
    text-align: justify;
    text-justify: inter-word;
    margin: auto;
    font-family: Roboto;
    font-size: 17px;
  }
}

@media screen and (min-width: 769px) {
  #title {
    margin: auto;
    font-size: 50px;
  }
  #description {
    width: 90%;
    text-align: justify;
    text-justify: inter-word;
    margin: auto;
    font-family: Roboto;
    font-size: 20px;
  }
}
</style>