import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
// import firebaseconfig from './firebase.config.js'

const config = {
  apiKey: 'AIzaSyDXxCM1tZEG5PINi7bjcATjVvHAR3sI7fY',
  authDomain: 'storagetest-90765.firebaseapp.com',
  databaseURL: 'https://storagetest-90765.firebaseio.com',
  projectId: 'storagetest-90765',
  storageBucket: 'storagetest-90765.appspot.com',
  messagingSenderId: '790007478957',
  appId: '1:790007478957:web:3ef402431d2890f0f22424'
}

firebase.initializeApp(config)

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
