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
      <br /><br />
      This app has been developped by 5 Concordia students. You can find their 
      respective LinkedIn by clicking on their names:
      <br /><br />
      <ul id="description">
        <li><a href="https://www.linkedin.com/in/lauren-lim-606794144/" target=”_blank”>Lauren Lim,</a></li>
        <li><a href="https://www.linkedin.com/in/manrajr/" target=”_blank”>Manraj Rai,</a></li>
        <li><a href="https://www.linkedin.com/in/samuelhuang08/" target=”_blank”>Samuel Huang,</a></li>
        <li><a href="https://www.linkedin.com/in/simonlim898/" target=”_blank”>Simon Lim</a> and</li>
        <li><a href="https://www.linkedin.com/in/judy-mezaber/" target=”_blank”>Judy Mezaber.</a></li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
#frame117 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  padding-top: 15%;
}

a {
  color: black;
}

a:visited {
  color:#6E41E2;
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
    width: 40%;
    text-align: justify;
    text-justify: inter-word;
    margin: auto;
    font-family: Roboto;
    font-size: 20px;
  }
}
</style>