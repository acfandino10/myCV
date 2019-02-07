<template>
  <div id="app">
    <MainBar :make-visible="false"/>

      <div class="logoPosition2">
          <b-navbar toggleable="md" class="mainBar">

              <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

              <b-navbar-brand href="#" class="transformCooler" style="margin-top: 10%;">Ingeniera de Sistemas</b-navbar-brand>

              <b-collapse is-nav id="nav_collapse2">

                  <b-navbar-nav class="ml-auto">
                      <b-nav-item href="#" class="transformCooler2">Profile</b-nav-item>
                      <b-nav-item href="#" class="transformCooler2">Goal</b-nav-item>
                      <b-nav-item href="#" class="transformCooler2">Education</b-nav-item>
                      <b-nav-item href="#" class="transformCooler2">Job Experience</b-nav-item>
                      <b-nav-item href="#" class="transformCooler2">Skills</b-nav-item>
                      <b-nav-item href="#" class="transformCooler2">Hobbies</b-nav-item>
                  </b-navbar-nav>

              </b-collapse>
          </b-navbar>
      </div>
    <div class="logoPosition">
        <img style="height:30%;filter: brightness(0) invert(1); width: 30%" fluid alt="Ana logo" src="https://lh3.googleusercontent.com/y_iYAi-BIgoflpWT1E7JJr2w6S5ChSJPixmauN7BJ9NMTfw3SiodnFnqCLDJp_Xh0Y6cLOfzogtSZqUXELrCZc_KXoH2Vn3CnPmhOB5jbSPxHBFqqmN8cX_vyu1sDlVUx4Jer9QKtzD7bA0PM8ScQq5px55a55Kcj9QQjto7ANAhm7rRHPDqMck91WWIpSObeYIoyrhEWtXLFyhJEexztZT5T0eja5XKOwSBRblHVqjf1X--CmZBAZNJ9nyIlW3s_kmItD1JtVXIKzZzG-7Y8B9ddW-DO9WSgCx5ycpHVZxKenHtg-Xeyp83M32wdhIx6JNUpM-O2QN1AG7J7VcHi5XmCiMwD8SrHp3zANUCIy3bWEDYFygLebVAb4IZmKPVy2Pw6HYZLJeC3R-bY95mPBon3EFWZ_0Ffi8KoO4J2FOEdIAm91Xr6LK0k9Lqq4p0Ci6wXswZHYs-TQKjQhjhmGW-nmYFVKv36NgZrEO-P0tt0WM4SVKV2cvYhX4IdrxQvX_C4p5rrbUFwmZCu_Q1jYKTuzpdwIBOHKarOoHPPyQi8mmmoPeyK832fo47kM38jmd5VXKLmvRkJd2Lts0c_ZJbVNvCMgE4a0Cgz5IMyAekY2qJNEkzHrAue1YIY47zTI3qH6XRKmDw_HH3ClCmtA7k8o-u9qbd=w1024-h768-no">
    </div>
    <!--<div class="logoPosition2">
      <img style="height:30%; width: 30%" fluid alt="Ana logo" src="https://lh3.googleusercontent.com/y_iYAi-BIgoflpWT1E7JJr2w6S5ChSJPixmauN7BJ9NMTfw3SiodnFnqCLDJp_Xh0Y6cLOfzogtSZqUXELrCZc_KXoH2Vn3CnPmhOB5jbSPxHBFqqmN8cX_vyu1sDlVUx4Jer9QKtzD7bA0PM8ScQq5px55a55Kcj9QQjto7ANAhm7rRHPDqMck91WWIpSObeYIoyrhEWtXLFyhJEexztZT5T0eja5XKOwSBRblHVqjf1X--CmZBAZNJ9nyIlW3s_kmItD1JtVXIKzZzG-7Y8B9ddW-DO9WSgCx5ycpHVZxKenHtg-Xeyp83M32wdhIx6JNUpM-O2QN1AG7J7VcHi5XmCiMwD8SrHp3zANUCIy3bWEDYFygLebVAb4IZmKPVy2Pw6HYZLJeC3R-bY95mPBon3EFWZ_0Ffi8KoO4J2FOEdIAm91Xr6LK0k9Lqq4p0Ci6wXswZHYs-TQKjQhjhmGW-nmYFVKv36NgZrEO-P0tt0WM4SVKV2cvYhX4IdrxQvX_C4p5rrbUFwmZCu_Q1jYKTuzpdwIBOHKarOoHPPyQi8mmmoPeyK832fo47kM38jmd5VXKLmvRkJd2Lts0c_ZJbVNvCMgE4a0Cgz5IMyAekY2qJNEkzHrAue1YIY47zTI3qH6XRKmDw_HH3ClCmtA7k8o-u9qbd=w1024-h768-no">
    </div>-->
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://picsum.photos/1024/480/?image=55" alt="image slot">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>

    </b-carousel>

     <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>-->
    <MyMainCV msg="Welcome to Your Vue.js App"/>
      <v-sparkline
              :value="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
              :gradient="['#222']"
              :smooth="10"
              :padding="8"
              :line-width="2"
              :stroke-linecap="'round'"
              :gradient-direction="'top'"
              auto-draw
      ></v-sparkline>
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
    <b-card
            class="theFooter"
            title="Design every aspect of your life"
            footer-tag="footer">
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
import MainBar from './components/MainBar.vue'

export default {
  name: 'app',
  components: {
    MyMainCV,
    MainBar
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
  .logoPosition {
    text-align: left !important;
    position: absolute;
    top: 5% !important;
    left: 30% !important;
    z-index: 1;
  }
  .logoPosition2 {
    text-align: left !important;
    position: absolute;
    top: 5% !important;
    left: 50% !important;
    z-index: 1;
  }
  .transformCooler {
      /* Safari */
      -webkit-transform: rotate(-90deg);

      /* Firefox */
      -moz-transform: rotate(-90deg);

      /* IE */
      -ms-transform: rotate(-90deg);

      /* Opera */
      -o-transform: rotate(-90deg);

      /* Internet Explorer */
      filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  }
  .transformCooler2 {
      margin:0% !important;
      padding:0% !important;
      /* Safari */
      -webkit-transform: rotate(-90deg);

      /* Firefox */
      -moz-transform: rotate(-90deg);

      /* IE */
      -ms-transform: rotate(-90deg);

      /* Opera */
      -o-transform: rotate(-90deg);

      /* Internet Explorer */
      filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  }
#app {
    font-family: 'Libre Baskerville', serif;
    font-weight: bolder;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
