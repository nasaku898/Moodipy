import { createStore } from 'vuex'

export default createStore({
    state: {
        initialEmotion: "Initial emotion from App",
        emotionDetected: "",
        emotionQueried: [],
        finalEmotion: "",
        username: "",
        helpful: false,
        agreeWithInitialEmotion: false
    },
    mutations: {
        updateInitialEmotion(state, enteredEmotion) {
            state.initialEmotion = enteredEmotion
        },
        setEmotionDetected(state, emotion) {
            state.emotionDetected = emotion
        },
        setEmotionQueried(state, emotions) {
            state.emotionQueried = emotions
        },
        setFinalEmotion(state, finalEmotion) {
            state.finalEmotion = finalEmotion
        },
        setUsername(state, username) {
            state.username = username
        },
        setHelpful(state, helpful) {
            state.helpful = helpful
        },
        setAgreeWithInitialEmotion(state, agree) {
            console.log(agree)
            state.agreeWithInitialEmotion = agree
        }
    },
    actions: {

    },
    modules: {

    }
})