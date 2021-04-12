<template>
  <div class="container">
    <h1 id="title">Your Feedback</h1>
    <div id="emotions">
      <p id="emoDetected">Emotions detected</p>
      <div class="box">
        <ul>
          <li
            v-for="emotion in Object.keys($store.state.emotionQueried)"
            :key="emotion"
          >
            <div class="lang">
              {{ emotion
              }}<span class="percent"
                >({{ $store.state.emotionQueried[emotion] * 100 }}%)</span
              >
            </div>
            <div class="bar">
              <div
                class="progress"
                v-bind:style="{
                  background: '#6E41E2',
                  width: $store.state.emotionQueried[emotion] * 100 + '%',
                }"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div id="center-self">
      <p id="heading6">You said your current mood was:</p>
      <p id="parag2">{{ $store.state.initialEmotion }}</p>
    </div>

    <div id="center-self" v-if="!consentGiven">
      <p id="heading6">
        We have a couple more questions to ask you, however, we need your
        consent.
      </p>
      <p id="parag2">
        To give your consent, click on the “Give consent” button below. You will
        be prompt with our consent form.
        <br /><br />
        If you do not want to answer more questions, simply click on “I do not
        want to give consent" and you will be brought back to the main page
      </p>
      <div class="buttons">
        <Button
          text="Give consent"
          background="#6E41E2"
          color="white"
          @click="showConsentForm = true"
        />
        <div class="modal" v-if="showConsentForm">
          <p id="heading6">Consent Form</p>
          <p id="consent-form">
            CONSENT TO PARTICIPATE IN Course Project Research
            <br />
            <br />
            I understand that I have been asked to participate in a research
            project being conducted under the supervision of Marta Kersten of
            Computer Science and Software Engineering of Concordia University
            (x5830, marta.kersten@concordia.ca).
            <br />
            <br />
            A.PURPOSE
            <br />
            I have been informed that the purpose of the research is to look at
            the user experience and user interface (UX and UI) design for
            differenttypes of technologies (e.g. VR, websites, wearables, etc.).
            Subjects in the study will be asked how they would like to use a
            personal data market place, what functionalities are important, what
            goals they would have in using such a market place etc.
            <br />
            <br />
            B.PROCEDURES
            <br />
            I understand that by participating in the following research I will
            be requested to answer questions and discuss your feelings towards
            and opinions of different technologies (e.g. AR, wearables, online
            stores, etc.). I understand I will be asked about myperception and
            use of different websites, technologies, etc., what kind of
            functionality they would deem useful, what would make it usable etc.
            Furthermore, participants might be asked to look at designs and play
            around with prototypes and be asked about their opinions on the
            designs and experiences using these prototypes. Participation in
            this research will be carried out either using online questionnaires
            or through personal interviews.
            <br />
            <br />
            C.RISKS AND BENEFITS
            <br />
            It is not anticipated that you will experience any discomfort from
            the procedures, and this research is not intended to benefit you
            personally.
            <br />
            <br />
            D.CONDITIONS OF PARTICIPATION
            <br />
            • I understand that I am free to withdraw my consent and discontinue
            my participationat any time without negative consequences.
            <br />
            • I understand that my participation in this study is: CONFIDENTIAL
            (i.e., the researcher will know, but will not disclose my identity)
            <br />
            • I understand that the data from this study may be published.
            <br />
            <br />
            I HAVE CAREFULLY STUDIED THE ABOVE AND UNDERSTAND THIS AGREEMENT. I
            FREELY CONSENT AND VOLUNTARILY AGREE TO PARTICIPATE IN THIS STUDY.
          </p>
          <Button
            text="I agree"
            background="#6E41E2"
            color="white"
            @click="(showConsentForm = false), (consentGiven = true)"
          />
          <Button
            text="I disagree"
            background="white"
            color="#6E41E2"
            @click="(showConsentForm = false), (consentGiven = false)"
          />
        </div>
        <Button
          text="I do not want to give consent"
          background="white"
          color="#6E41E2"
        />
      </div>
    </div>

    <div id="center-self" v-show="consentGiven">
      <div>
        <p id="heading6">What is your name?</p>
        <div id="usrinput">
          <input
            class="input-box"
            placeholder="Your name"
            v-model="username"
            @change="$store.commit('setUsername', username)"
          />
        </div>
      </div>
      <div>
        <p id="heading6">Do you still agree with the emotion you inputed?</p>
        <div id="buttons">
          <Button
            text="Yes, I agree"
            background="#6E41E2"
            color="white"
            @click="$store.commit('setAgreeWithInitialEmotion', true), (agreeWithEmo = true)"
          />
          <Button
            text="No, I disagree"
            background="white"
            color="#6E41E2"
            @click="$store.commit('setAgreeWithInitialEmotion', false), (agreeWithEmo = false)"
          />
        </div>
        <br /><br />
        <div id="usrinput" v-if="!agreeWithEmo">
          <input
            class="input-box"
            placeholder="Your current emotion"
            v-model="finalEmotion"
            @change="$store.commit('setFinalEmotion', finalEmotion)"
          />
        </div>
      </div>
      <div>
        <p id="heading6">Did music help you validate your emotion?</p>
        <div id="buttons">
          <Button
            text="Yes"
            background="#6E41E2"
            color="white"
            @click="$store.commit('setHelpful', true)"
          />
          <Button
            text="No"
            background="white"
            color="#6E41E2"
            @click="$store.commit('setHelpful', false)"
          />
        </div>
      </div>
    </div>

    <div id="center-self" v-if="consentGiven">
      <p id="heading6">That's it! Thank you for using Moodipy!</p>
      <div id="buttons">
        <Button
          text="Submit and bring me back to the home page"
          background="#6E41E2"
          color="white"
          @click="handleSubmitFeedback"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button/Button.vue";
import { createFeedback } from "../../firebase";
import router from '../../router'
export default {
  name: "FeedbackPage",
  components: {
    Button,
  },

  data() {
    return {
      showConsentForm: false,
      consentGiven: false,
      agreeWithEmo: true,
      isLoading: true,
    };
  },
  methods: {
    async handleSubmitFeedback() {
      if (
        this.$store.state.username &&
        this.$store.state.initialEmotion &&
        this.$store.state.emotionQueried && 
        (this.$store.state.agreeWithInitialEmotion || this.$store.state.finalEmotion) &&
        this.$store.state.username
      ) {
        const feedback = {
          name: this.$store.state.username,
          initialEmotion: this.$store.state.initialEmotion,
          emotionDetected: this.$store.state.emotionDetected,
          emotionQueried: this.$store.state.emotionQueried,
          helpful: this.$store.state.helpful,
          agreeWithInitialEmotion: this.$store.state.agreeWithInitialEmotion,
          finalEmotion:this.$store.state.finalEmotion
        };
        await createFeedback(feedback);
        router.push('/')
      } else {
        alert("Please fill out the form completely");
      }
    },
    changeColor(){
                    this.isLoading = !this.isLoading;
                }
  },
  beforeMount(){
    if(!this.$store.state.initialEmotion){
      router.push('/')
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width: 960px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 600px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px;
  }
}

#title {
  text-align: center;
  margin-top: 132px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 56px;
  line-height: 114%;
}

.is-red{
            background: red;
        }
        .is-blue{
            background: blue;
        }

#emotions {
  color: #6e41e2;
  margin: auto;
  width: 50%;
  height: 100%;
}
.input-box {
  background: #ffffff;
  /* Shadow */
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  border-radius: 4px;

  /* input */
  width: 482px;
  height: 56px;

  /* text inside the input  */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;

  /* Colors */
  color: black;
  padding-left: 10px;
}
#emoDetected {
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 133%;
  color: #6e41e2;
  opacity: 0.9;
}

#emotion {
  font-family: Roboto;
  color: #6e41e2;
  opacity: 0.8;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
}

#center-self {
  padding-top: 15px;
  padding-bottom: 15px;
}

#heading6 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
}

#parag2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
}

#buttons {
  text-align: center;
}

.buttons {
  text-align: center;
}

#usrinput {
  display: flex;
  justify-content: center;
}

.box {
  padding: 20px;
  background: white;
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

ul li {
  list-style-type: none;
  padding: 5px;
}

.lang {
  margin: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
}

.bar {
  width: 100%;
  background: #dfdfdf;
  overflow: hidden;
  padding: 5px;
  border-radius: 4px;
}

.progress {
  float: left;
  padding: 10px;
  border-radius: 4px;
}

.percent {
  /* float: right; */
  padding-left: 4px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 600px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  border-radius: 8px;

  padding: 25px;
}

#consent-form {
  width: 90%;
  height: 224px;
  overflow-y: scroll;
  padding: 20px;

  /* Colors / White */
  background: #ffffff;
  /* Shadow */
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  text-align: center;

  margin-left: auto;
  margin-right: auto;
}
</style>
