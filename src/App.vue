<template>
  <div id="app">
   <TheBanner/>
    <audio controls autoplay>
      <source src="./assets/theaudio.mp3" type="audio/mp3">
      Your browser does not support the audio element.
    </audio>
    <MyMainCV msg="Welcome to Your Vue.js App"/>
    <b-card
            footer-tag="footer">

      <b-container class="bv-example-row" style="text-align:center; padding-top:2%;">
        <b-row>
          <b-col>
            <img style="border-radius: 50%; max-height: 180px; max-width: 180px;" fluid-grow="30%"
                 src="https://lh3.googleusercontent.com/9_hGv2NAUV2D-9D6nryCM8os1KNGLSYBW7tiGwZIwBtmWkPYsL6bpiCyI5qtby5vOLTan3F3LtUuvxb2vcFi5XGsFUV3Dlm41jRq9rKU0fJ1p6XWd3vnjlZ9U5idk99S5VpAaziK3dEEJUs2KjdcWgcWddKfXTfmqa4ZZZs61DK3rGvpYQ_xyc1NzmeNHCLwpbBeUdoWz_66VQVk4pW-APmHijpr-ezlEilgRvstTLip8jC9K-rOUvJFl4mBJNOKABnPFC3qXixoRa_y7w_kc2f5sxrFD5--BfFi3blW3HQdA3gvq38c8hL_qF7XQCxHtN83BatHLHxLBnp5JqsuGgiCjlRLNLkwusTGULbWrDc5kJi2LnnzrEWW9Wte41MIHH6C1TEcV8y_hUfkUJ8e9xvMYMSlbLMf8nQzMUMjBmySX8KpA8sBb0HpBwn67PhRoyNDeEYyQHf804lraWqWmQnR-SJY4EmcEaTBk1goFTZ6fFj0s6TRHPM563rAp0oNFFKqMoA-IFXShtZFOu90xlJg7etP1MuG_6zjySpGuh-cHGHC-nEHb3YwrnxTNT6SIu1ZPA7MnFYVPrVnm6gFy0Y-IU-iB2LWFw7NgZqIvvCbrPmji3cqLGW2XoiYMzGEIU95dRqo39D-efuNOmCbljOAY-BOygl1=s943-no"/>
          </b-col>
          <b-col sm="8">
            <div>
              Contact Email: ac.fandino10@uniandes.edu.co
              <br>
              Bogotá D.C, Colombia
              <br>
              <div @click="goToGit()">
                <b-img style="width:10% !important;height: 10% !important;" src="https://image.flaticon.com/icons/png/512/25/25231.png" fluid-grow alt="Fluid-Grow image" />
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div slot="footer"
           class="theFooter">
        <p>Copyright &copy; 2019 by <a href="https://www.facebook.com/anaca.fandino">anaca</a>. All rights reserved.</p>
        <p>Find the beauty in everything you do.</p>
      </div>
    </b-card>
  </div>
</template>

<script>
import MyMainCV from './components/MyMainCV.vue'
import TheBanner from './components/TheBanner.vue'
import VueAudio from 'vue-audio'

export default {
  name: 'app',
  components: {
    MyMainCV,
    TheBanner,
    VueAudio
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    goToGit() {
      window.location.href = 'https://github.com/acfandino10';
    },
    onSlideStart () {
      this.sliding = true
    },
    onSlideEnd () {
      this.sliding = false
    }
  }
}
</script>

<style scooped>


  @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Libre+Baskerville|Monoton');

  .theFooter{
    text-align: center;
    font-family: Amatic SC;
    font-size: 150%;
    padding-top: 50px;
  }

</style>
