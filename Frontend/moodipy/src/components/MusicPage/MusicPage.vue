<template>
  <div id="frame117">
    <h1 id="slogan">Music adapted to your mood</h1>
    <p id="instruction">
      1. Upload an image of your face
      <br />
      2. We'll provide you with a playlist based on your mood
    </p>
  </div>
  <div>
      <p id="select-file">Select a file</p>
  </div> 
</template>

<script>
export default {
  name: "MusicPage",
};
</script>

<style scoped>
#slogan {
  /* Music adapted to your mood */

  position: static;
  max-width: 561px;
  max-height: 152px;
  left: 0px;
  top: 0px;

  /* 56 Heading 1 */

  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 56px;
  line-height: 64px;
  /* or 114% */

  display: flex;
  align-items: center;

  color: #000000;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 32px 0px;
}
#frame117 {
  /* Frame 117 */

  /* Auto Layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  max-width: 561px;
  max-height: 264px;
  left: 45px;
  top: calc(50% - 264px / 2 - 50px);
}

#instruction {
  /* 1. Upload an image of your face 2. We’ll provide you with a playlist based on your mood */

  position: static;
  width: 561px;
  height: 104px;
  left: 0px;
  top: 184px;

  /* 16 Paragraph 2 */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  color: #000000;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 32px 0px;
}
#select-file {
  /* Select a file or drag in form */

  position: absolute;
  height: 24px;
  left: 20px;
  right: 98px;
  top: 20px;

  /* 16 Paragraph 2 */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  /* Colors / Primary */

  color: #6e41e2;
}
</style>