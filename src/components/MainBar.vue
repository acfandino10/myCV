<template>
    <div class="content">
        <b-navbar toggleable="md" class="barStyle">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>


            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item href="#profile">Profile</b-nav-item>
                    <b-nav-item href="#projects">Projects</b-nav-item>
                    <b-nav-item href="#education">Education</b-nav-item>
                    <b-nav-item href="#experience">Experience</b-nav-item>
                    <b-nav-item href="#skills">Skills</b-nav-item>
                    <b-nav-item href="#hobbies">Hobbies</b-nav-item>
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