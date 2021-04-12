import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAjyn93D9JsUTaB3b0ViI-jxTSQD2W5fME",
    authDomain: "moodipy.firebaseapp.com",
    projectId: "moodipy",
    storageBucket: "moodipy.appspot.com",
    messagingSenderId: "1047862776477",
    appId: "1:1047862776477:web:b1e24755e7b75c9964ba74",
    measurementId: "G-BQGR50VYE5"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const feedbackCollection = db.collection('feedback')

export const createFeedback = (feedback)=>{
    return feedbackCollection.add(feedback)
}