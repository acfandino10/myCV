<template>
  <div id="app">
    <div class="logoPosition">
      <img style="height:30%;filter: brightness(0) invert(1); width: 30%" fluid alt="Ana logo" src="https://lh3.googleusercontent.com/y_iYAi-BIgoflpWT1E7JJr2w6S5ChSJPixmauN7BJ9NMTfw3SiodnFnqCLDJp_Xh0Y6cLOfzogtSZqUXELrCZc_KXoH2Vn3CnPmhOB5jbSPxHBFqqmN8cX_vyu1sDlVUx4Jer9QKtzD7bA0PM8ScQq5px55a55Kcj9QQjto7ANAhm7rRHPDqMck91WWIpSObeYIoyrhEWtXLFyhJEexztZT5T0eja5XKOwSBRblHVqjf1X--CmZBAZNJ9nyIlW3s_kmItD1JtVXIKzZzG-7Y8B9ddW-DO9WSgCx5ycpHVZxKenHtg-Xeyp83M32wdhIx6JNUpM-O2QN1AG7J7VcHi5XmCiMwD8SrHp3zANUCIy3bWEDYFygLebVAb4IZmKPVy2Pw6HYZLJeC3R-bY95mPBon3EFWZ_0Ffi8KoO4J2FOEdIAm91Xr6LK0k9Lqq4p0Ci6wXswZHYs-TQKjQhjhmGW-nmYFVKv36NgZrEO-P0tt0WM4SVKV2cvYhX4IdrxQvX_C4p5rrbUFwmZCu_Q1jYKTuzpdwIBOHKarOoHPPyQi8mmmoPeyK832fo47kM38jmd5VXKLmvRkJd2Lts0c_ZJbVNvCMgE4a0Cgz5IMyAekY2qJNEkzHrAue1YIY47zTI3qH6XRKmDw_HH3ClCmtA7k8o-u9qbd=w1024-h768-no">
   </div>
    <div class="logoPosition2">
      <img style="height:30%; width: 30%" fluid alt="Ana logo" src="https://lh3.googleusercontent.com/y_iYAi-BIgoflpWT1E7JJr2w6S5ChSJPixmauN7BJ9NMTfw3SiodnFnqCLDJp_Xh0Y6cLOfzogtSZqUXELrCZc_KXoH2Vn3CnPmhOB5jbSPxHBFqqmN8cX_vyu1sDlVUx4Jer9QKtzD7bA0PM8ScQq5px55a55Kcj9QQjto7ANAhm7rRHPDqMck91WWIpSObeYIoyrhEWtXLFyhJEexztZT5T0eja5XKOwSBRblHVqjf1X--CmZBAZNJ9nyIlW3s_kmItD1JtVXIKzZzG-7Y8B9ddW-DO9WSgCx5ycpHVZxKenHtg-Xeyp83M32wdhIx6JNUpM-O2QN1AG7J7VcHi5XmCiMwD8SrHp3zANUCIy3bWEDYFygLebVAb4IZmKPVy2Pw6HYZLJeC3R-bY95mPBon3EFWZ_0Ffi8KoO4J2FOEdIAm91Xr6LK0k9Lqq4p0Ci6wXswZHYs-TQKjQhjhmGW-nmYFVKv36NgZrEO-P0tt0WM4SVKV2cvYhX4IdrxQvX_C4p5rrbUFwmZCu_Q1jYKTuzpdwIBOHKarOoHPPyQi8mmmoPeyK832fo47kM38jmd5VXKLmvRkJd2Lts0c_ZJbVNvCMgE4a0Cgz5IMyAekY2qJNEkzHrAue1YIY47zTI3qH6XRKmDw_HH3ClCmtA7k8o-u9qbd=w1024-h768-no">
    </div>
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

    <MyMainCV msg="Welcome to Your Vue.js App"/>
    <b-card title="Design every aspect of your life"
            footer-tag="footer">
      <em slot="footer">Ana Camila Fandiño de la Hoz</em>
    </b-card>


  </div>
</template>

<script>
import MyMainCV from './components/MyMainCV.vue'

export default {
  name: 'app',
  components: {
    MyMainCV
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
  .alignLeft{
    text-align: left;
  }
  .logoPosition {
    text-align: left !important;
    position: absolute;
    top: 5% !important;
    left: 0% !important;
    z-index: 1;
  }
  .logoPosition2 {
    text-align: left !important;
    position: absolute;
    top: 5% !important;
    left: 0.2% !important;
    z-index: 1;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
