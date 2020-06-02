<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <input type="file" name="file" id="file" @change="uploadImage">
    <img :src="imgSrc" :alt="imgName">
    <button @click="uploadToStorage">Upload to storage</button>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/storage'

export default {
  name: 'App',
  data: function () {
    return {
      imgFile: '',
      imgSrc: '',
      imgName: ''
    }
  },
  methods: {
    uploadImage: function (event) {
      this.imgFile = event.target.files[0]
      const reader = new FileReader()
      this.imgName = event.target.files[0].name
      reader.readAsDataURL(this.imgFile)
      reader.onload = (e) => {
        this.imgSrc = e.target.result
      }
    },
    uploadToStorage: function () {
      if (this.imgFile !== '') {
        var storageRef = firebase.storage().ref()
        var imagesRef = storageRef.child(`images/${this.imgName}`)
        imagesRef
          .put(this.imgFile)
          .then(function (snapshot) {
            console.log('Uploaded a blob or file!')
          })
          // .collection('players')
          // .doc(currentUser.uid)
          // .update({
          //   candidates: this.candidates,
          //   credits: this.credits,
          //   voted: this.voted
          // })
          // .then(() => {
          //   // console.log('Voted!')
          // })
      } else {
        console.error('no image ready to upload')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
