<template>
    <div class="bannerContent">
        <b-navbar toggleable="md" class="barStyle">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">
                <img style="height: 20%;width: 20%;" src="../assets/blacklogo.png"/>
            </b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item href="MyMainCV.html#profile">Profile</b-nav-item>
                    <b-nav-item href="MyMainCV.html#projects">Projects</b-nav-item>
                    <b-nav-item href="MyMainCV.html#education">Education</b-nav-item>
                    <b-nav-item href="MyMainCV.html#experience">Experience</b-nav-item>
                    <b-nav-item href="MyMainCV.html#skills">Skills</b-nav-item>
                    <b-nav-item href="MyMainCV.html#hobbies">Hobbies</b-nav-item>
                </b-navbar-nav>


            </b-collapse>
        </b-navbar>
        <div class="titlePosition">
            An a Ca mi la Fan di ño de la Ho z
        </div>

        <div class="mainBarPosition">
            <b-navbar toggleable="md" class="mainBar" type="dark">

                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand href="#" class="transformCooler" style="margin-top: 10%;">Computer  <br>Science & <br>Design Student</b-navbar-brand>

                <b-collapse is-nav id="nav_collapse2">

                    <b-navbar-nav>
                        <b-nav-item href="MyMainCV.html#profile" class="transformCooler2"><span class="lightercolor">Profile</span></b-nav-item>
                        <b-nav-item href="MyMainCV.html#projects" class="transformCooler2"><span class="lightercolor">Projects</span></b-nav-item>
                        <b-nav-item href="MyMainCV.html#education" class="transformCooler2"><span class="lightercolor">Education</span></b-nav-item>
                        <b-nav-item href="MyMainCV.html#experience" class="transformCooler2"><span class="lightercolor">Experience</span></b-nav-item>
                        <b-nav-item href="MyMainCV.html#skills" class="transformCooler2"><span class="lightercolor">Skills</span></b-nav-item>
                        <b-nav-item href="MyMainCV.html#hobbies" class="transformCooler2"><span class="lightercolor">Hobbies</span></b-nav-item>
                    </b-navbar-nav>

                </b-collapse>
            </b-navbar>
        </div>
        <div class="logoPosition">
            <img style="height:50%;filter: brightness(0) invert(1); width: 50%" fluid alt="Ana logo" src="../assets/blacklogo.png"/>
        </div>
        <!--<div class="logoPosition2">
          <img style="height:50%; width: 50%" fluid alt="Ana logo" src="../assets/blacklogo.png"/>
        </div>-->
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#202020"
                    :interval="4000"
                    img-width="1024"
                    img-height="480"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
        >

            <b-carousel-slide class="carouselimgs" img-src="https://i.ibb.co/V9KpcCN/large.jpg">
            </b-carousel-slide>

            <b-carousel-slide  class="carouselimgs" img-src="https://i.ibb.co/FVmR0Mz/large1.jpg">
            </b-carousel-slide>

            <b-carousel-slide class="carouselimgs" img-src="https://i.ibb.co/ZhMFTD9/large2.jpg">
            </b-carousel-slide>

            <b-carousel-slide class="carouselimgs" img-src="https://i.ibb.co/c2wBmMK/large3.jpg">
            </b-carousel-slide>

        </b-carousel>
    </div>
</template>

<script>

    import MyMainCV from "./MyMainCV";

    export default {
        name: "TheBanner",
        data () {
            return {
                slide: 0,
                sliding: null,
                valueDeterminate: 50,
            }
        },
        methods: {
            onSlideStart () {
                this.sliding = true
            },
            onSlideEnd () {
                this.sliding = false
            },
            changeTo() {
                this.$router.push('/#profile')
            }
        }
    }
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css?family=Anton');

    .carouselimgs {
        height: 50% !important;
        max-height: 720px;
        min-height: 300px;
        filter: brightness(50%);
    }
    .bannerContent{
        font-size: 20px;
        font-family: "Libre Baskerville', serif";
        font-weight: bolder;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    .titlePosition {
        text-align: justify !important;
        font-size: 20rem;
        letter-spacing: 2px;
        line-height: 0.5;
        color: rgba(74, 116, 112,0.5);
        position: absolute;
        top: 5% !important;
        left: 5% !important;
        z-index: 1;
    }
    .logoPosition {
        text-align: left !important;
        position: absolute;
        top: 20% !important;
        left: 35% !important;
        z-index: 1;
    }
    .logoPosition2 {
        text-align: left !important;
        position: absolute;
        top: 30% !important;
        left: 36% !important;
        z-index: 1;
    }

    .mainBarPosition {
        text-align: left !important;
        position: absolute;
        left: 0% !important;
        z-index: 1;
    }

    .transformCooler {
        color: white !important;
    }
    .lightercolor {
        color: white;
    }
    .transformCooler2 {
        font-family: 'Anton';
        font-weight: lighter;
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

    .navbar-toggler-icon {
        background-color: white;
        color:white;
    }
    .barStyle{
        background-color: transparent;
        position: fixed;
        top:0px;
        left: 0px;
        z-index: auto;
    }
</style>