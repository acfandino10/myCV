<template>
    <div class="bannerContent">
        <MainBar :make-visible="false"/>
        <div class="titlePosition">
            Ana Ca mi la Fan di ño de la Hoz
        </div>

        <div class="mainBarPosition">
            <b-navbar toggleable="md" class="mainBar">

                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand href="#" class="transformCooler" style="margin-top: 10%;">Estudiante Ingenieria<br> de Sistemas <br>& Diseño</b-navbar-brand>

                <b-collapse is-nav id="nav_collapse2">

                    <b-navbar-nav>
                        <b-nav-item href="#" class="transformCooler2"><span class="lightercolor">Profile</span></b-nav-item>
                        <b-nav-item href="#" class="transformCooler2"><span class="lightercolor">Goal</span></b-nav-item>
                        <b-nav-item href="#" class="transformCooler2"><span class="lightercolor">Education</span></b-nav-item>
                        <b-nav-item href="#" class="transformCooler2"><span class="lightercolor">Experience</span></b-nav-item>
                        <b-nav-item href="#" class="transformCooler2"><span class="lightercolor">Skills</span></b-nav-item>
                        <b-nav-item href="#" class="transformCooler2"><span class="lightercolor">Hobbies</span></b-nav-item>
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

            <b-carousel-slide class="carouselimgs" img-src="https://picsum.photos/1024/480/?image=52">
            </b-carousel-slide>

            <b-carousel-slide  class="carouselimgs" img-src="https://lh3.googleusercontent.com/Y8VT5aHMpAE6TzaZ8HwVGm4lD32hNalUzKnMGuaox0WiOz5w7bTHkfOuyLUcXyEDY2Nf_SyBHKJ3zER75CSFNmRNHqT8DD5SojPkw-KHT2v-w8uM55Ehx3QqlOemtIuLw0omJhJpCRjNcVUAf2IVUS-fmY1-kVJ43d6uUYqHZmIaqJGYWNOPpNFSq-ErHefKfZjoPQICwKQM5fljwZRGMoMNRYEwEFIim9HYpSTrOvf66eRwahNLvVPnWwYlsL9zrpBa6O883xI6PfQUmG8SVYlaz5CG_6LPbHPnGrWr2ohuAzeRY686XW0JN23tJIlDAGN3GRyQ0_9WX0Q_9z5rwM2daA38QeZEFG3owtWU6s2UospfBzwIgMwlJYtssblY-faO1OxykMO3J74iINHo5a-lhsYg06qKmas7rMGykLMwSImCjGLXnhaAIjTZNd0THvb7AA-AYlJiCauzM4c2-JixSOEMDTMFZEsZuRKk27olqJejJMgZYYCmk3I5kJo8y_8_24b1dz-IaSi9Ew7O16C0MdCgF_6FbFIZ1qtWQOIDZUbhoeFEi0BWYmYc02IuT4d048QaxGXwt9Zau2PuSGt3CKSUhy0Ag08ppKHl5-1nV88hgUx6ntKDsU5GB1UfNGwt7guMBQhWTPFw3D3Jk5iXsut7BrdN=w1258-h943-no">
            </b-carousel-slide>

            <b-carousel-slide class="carouselimgs" img-src="https://lh3.googleusercontent.com/CCozPlhVCZRrig5MkeCn6oFgrAWL_MVPlWX6t6vwpi3mLbU4EfwgswtIyyruvvHUcvuura3A_RcJLxHO-JX5_TB99YtiXhqYEt3FradXvhdzk6wYFPfJp1Lu2SSYykIU6uSR7KkC622dMFe7Le4vn2IGGO0tJdOzedBAoDad_uULBf2eBS9x43P0GLzY2UE-tDYuGQ0eAeld4cfmDC_qSAq5BrkG2PjMTkiZ5yBXBhjBMs5XDBN57vvJuRdEjJYxzQey_mVEX2_XYuYUmk4AgpTyRZHlh-BDdcNQm-fnrCN4gGxM-tlrUgPBP8ZaWCgiJUMOnLTcL8WKRNeU6IsTDgSAmopqZ4GhAS-0uVafnEXEogqViqXXTJUjYyuiesvDBkI9PUeQoR9YFYrubKfisrMYzCrx8vPpKp36065WTQVk2l_L-Gin6tfLhCGUI6MRsaOfC0zDPuKTjncrF3QAO73p9XbMkNOvccR1lmE0ELYcA3fPsOP3GCt2wS1z5i17vyetFhddaTm6I58_MhQYkWvxLPEaKPbpjKBOO4F-f1TyM4DM70xaCu8Crr01GfWw-eSvPtAqzXOg2YErcNBkF75uBLoUyoGvlI-kqDADENtPZkO7Aj59p1XI8ZUJ_mDgViKTZTXzs8jFU3ir_K6IKMInkKo6gLc=w1677-h943-no">
            </b-carousel-slide>

            <b-carousel-slide class="carouselimgs" img-src="https://data.whicdn.com/images/323618398/large.jpg">
            </b-carousel-slide>

        </b-carousel>
    </div>
</template>

<script>
    import MainBar from './MainBar.vue'
    export default {
        name: "TheBanner",
        components: {
            MainBar
        },
        data () {
            return {
                valueDeterminate: 50,
            }
        },
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
        color: rgba(123,120,10,0.6);
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
        color: rgba(160,170,20,0.7) !important;
    }
    .lightercolor {
        color: rgba(255,255,255,0.5);
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

</style>