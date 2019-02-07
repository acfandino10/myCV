<template>
  <div id="app">
      <TheBanner/>
    <!--<v-parallax
                  dark
                  src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          >
              <v-layout
                      align-center
                      column
                      justify-center
              >
                  <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
                  <h4 class="subheading">Build your application today!</h4>
              </v-layout>
          </v-parallax>-->
    <MyMainCV msg="Welcome to Your Vue.js App"/>
    <b-card
            class="theFooter"
            footer-tag="footer">
      <p>
        GitHub https://github.com/acfandino10
        Email ac.fandino10@uniandes.edu.co
        Dirección Cra 54D # 183-50
        Teléfono +57 3195320954
        Bogotá D.C, Colombia
      </p>
      <img style="border-radius: 50%;height: 10%; width: 10%;" fluid-grow="10%"
           src="https://lh3.googleusercontent.com/9_hGv2NAUV2D-9D6nryCM8os1KNGLSYBW7tiGwZIwBtmWkPYsL6bpiCyI5qtby5vOLTan3F3LtUuvxb2vcFi5XGsFUV3Dlm41jRq9rKU0fJ1p6XWd3vnjlZ9U5idk99S5VpAaziK3dEEJUs2KjdcWgcWddKfXTfmqa4ZZZs61DK3rGvpYQ_xyc1NzmeNHCLwpbBeUdoWz_66VQVk4pW-APmHijpr-ezlEilgRvstTLip8jC9K-rOUvJFl4mBJNOKABnPFC3qXixoRa_y7w_kc2f5sxrFD5--BfFi3blW3HQdA3gvq38c8hL_qF7XQCxHtN83BatHLHxLBnp5JqsuGgiCjlRLNLkwusTGULbWrDc5kJi2LnnzrEWW9Wte41MIHH6C1TEcV8y_hUfkUJ8e9xvMYMSlbLMf8nQzMUMjBmySX8KpA8sBb0HpBwn67PhRoyNDeEYyQHf804lraWqWmQnR-SJY4EmcEaTBk1goFTZ6fFj0s6TRHPM563rAp0oNFFKqMoA-IFXShtZFOu90xlJg7etP1MuG_6zjySpGuh-cHGHC-nEHb3YwrnxTNT6SIu1ZPA7MnFYVPrVnm6gFy0Y-IU-iB2LWFw7NgZqIvvCbrPmji3cqLGW2XoiYMzGEIU95dRqo39D-efuNOmCbljOAY-BOygl1=s943-no"/>
      <div slot="footer">
        <p>Copyright &copy; 2016 by <a href="https://www.facebook.com/anaca.fandino">anaca</a>. All rights reserved.</p>
        <p>Find the beauty in everything you do.</p>
      </div>
    </b-card>
      <!--<v-parallax
              height="300"
              src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      ></v-parallax>-->


  </div>
</template>

<script>
import MyMainCV from './components/MyMainCV.vue'
import TheBanner from './components/TheBanner.vue'

export default {
  name: 'app',
  components: {
    MyMainCV,
    TheBanner
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
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


  @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Libre+Baskerville');

  .theFooter{
    text-align: center;
    font-family: Amatic SC;
    font-size: 150%;
    padding-top: 50px;
  }

</style>
