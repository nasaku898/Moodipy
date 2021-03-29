<template>
  <div class="container">
    <div id="frame117">
      <h1 id="slogan">Music adapted to your mood</h1>
      <p id="instruction">
        1. Upload an image of your face
        <br />
        2. We'll provide you with a playlist based on your mood
      </p>
      <form @submit="retrievePlaylists">
        <input
          type="file"
          id="imgSelect"
          style="display: none"
          accept=".png, .jpg"
          @change="getFileName"
        />
        <label htmlFor="imgSelect">
          <div id="file">
            <div id="file-wrapper">
              <p id="select-file">Select a file</p>

              <p v-if="fileName" id="select-file-description">{{ fileName }}</p>
              <p v-else id="select-file-description">
                PNG, jpg, gif files up to 10 MB in size are available for
                download
              </p>
            </div>
          </div>
        </label>
        <button class="btn" v-if="fileName" @click="removeFile">
          Delete file
        </button>

        <button class="btn" v-if="fileName" type="submit">Search</button>
      </form>
    </div>
    <div id="playlist-result">
      <p id="playlist">Playlists</p>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
export default {
  name: "MusicPage",
  data() {
    return {
      fileName: "",
    };
  },
  methods: {
    retrievePlaylists(event) {
      event.preventDefault();
      const file = event.target.imgSelect.files[0];
      console.log(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        var dataURL = reader.result;

        var BASE64_MARKER = ";base64,";

        let parts = dataURL.split(BASE64_MARKER);
        let contentType = parts[0].split(":")[1];
        let raw = window.atob(parts[1]);
        var rawLength = raw.length;

        var uInt8Array = new Uint8Array(rawLength);

        for (var i = 0; i < rawLength; ++i) {
          uInt8Array[i] = raw.charCodeAt(i);
        }

        var imgContent = new Blob([uInt8Array], { type: contentType });

        axios
          .post(
            "https://soen357.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&recognitionModel=recognition_04&returnRecognitionModel=false&detectionModel=detection_01&faceIdTimeToLive=86400",
            imgContent,
            {
              headers: {
                "Ocp-Apim-Subscription-Key": "eb726af9045746c888069e4d6b9f4964",
                "Content-Type": "application/octet-stream",
              },
              params: {
                returnFaceId: true,
                returnFaceLandmarks: false,
                returnFaceAttributes:
                  "age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise",
              },
            }
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    },
    getFileName() {
      this.fileName = document
        .getElementById("imgSelect")
        .value.split(/(\\|\/)/g)
        .pop();
    },
    removeFile() {
      document.getElementById("imgSelect").value = "";
      this.getFileName();
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 960px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 15%;
  }
}

@media only screen and (max-width: 600px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
  }
}
.btn {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #6e41e2;
  border-radius: 4px;
  border: none;
  background: transparent;
}
.btn:hover {
  background: rgba(51, 51, 51, 0.08);
}
#slogan {
  /* Music adapted to your mood */

  /* 56 Heading 1 */
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 56px;
  line-height: 64px;

  color: #000000;

  margin: 32px 0px;
}

@media only screen and (min-width: 300px) {
  #frame117 {
    /* Frame 117 */

    padding: 0px;

    max-width: 531px;
    height: 100%;
    margin: 20px;
  }

  @media only screen and (min-width: 1200px) {
    #frame117 {
      margin-left: 50px;
    }
  }

  @media only screen and (min-width: 1500px) {
    #frame117 {
      margin-left: 160px;
    }
  }
}

#instruction {
  /* 1. Upload an image of your face 2. We’ll provide you with a playlist based on your mood */

  max-width: 531px;
  max-height: 75px;

  /* 16 Paragraph 2 */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  color: #000000;

  margin: 0px 0px;
}

#select-file {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #6e41e2;
  margin: 0px;
}

#select-file-description {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;

  margin: 0px;
  /* Colors / Gray */

  color: rgba(17, 17, 17, 0.48);
}
#delete-file {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  color: #6e41e2;
  margin: 0px;
}
#file {
  /* File */

  max-width: 482px;
  max-height: 94px;

  /* Colors / White */

  background: #ffffff;
  /* Shadow */

  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  border-radius: 4px;

  /* Inside Auto Layout */

  margin: 0px 0px;
  margin-top: 10px;
}

#playlist-result {
  /* Auto Layout */

  padding: 5px;
  margin: 5px;

  max-width: 889px;
  height: 533px;

  /* Colors / White */

  background: #ffffff;
  /* Shadow */

  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  border-radius: 8px;
}

#file-wrapper {
  padding: 10px;
  padding-top: 20px;
}

#playlist {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
}
</style>