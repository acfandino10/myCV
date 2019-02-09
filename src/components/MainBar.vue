<template>
    <div class="content">
        <b-navbar toggleable="md" class="barStyle">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">
                <img style="height: 20%;width: 20%;" src="../assets/blacklogo.png"/>
            </b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item href="#">Profile</b-nav-item>
                    <b-nav-item href="#">Goal</b-nav-item>
                    <b-nav-item href="#">Education</b-nav-item>
                    <b-nav-item href="#">Experience</b-nav-item>
                    <b-nav-item href="#">Skills</b-nav-item>
                    <b-nav-item href="#">Hobbies</b-nav-item>
                </b-navbar-nav>


            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "MainBar",
        props: ['makeVisible'],
        data () {
            return {

            }
        },
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