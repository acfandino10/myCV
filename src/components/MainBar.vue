<template>
    <div class="content">
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
    </div>
</template>

<script>
    import MyMainCV from "./MyMainCV";

    export default {
        name: "MainBar",
        props: ['makeVisible'],
        data () {
            return {

            }
        },
        methods: {
            clickeado() {
                this.$router.push({path:'/App#profile'})
            }
        }
    }
</script>

<style scoped>
.barStyle{
    background-color: transparent;
    position: fixed;
    top:0px;
    left: 0px;
    z-index: auto;
}
</style>