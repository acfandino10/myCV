<template>
  <div class="bigcontent">
      <div class="profilediv">
          <h3 id="profile">Profile</h3>
          <p>
              Sixth semester student of Computer and System Engineering and Design at Los Andes University in Bogotá, Colombia.
              Friendly, gentle, kind, creative and excited to learn. Passionate about design.  Good scores on english tests such as TOELF,
              ICFES and CERF. Additional to this, participation on programming competitions on the Colombian Collegiate
              Programming League. Other experience include some experience in customer service working part time at a
              bilingual call center.
          </p>
          <h3 id="education">Education</h3>
          <p>
              High School at Gimnasio Vermont							2013
              University at Los Andes University (1 year from graduation)	      	       		2013-now
          </p>
          <h3 id="projects">Projects</h3>
          <p>Wiring Challenge (2014) - Interactive project developed on wiring with external sensors that depending on amount of people on table will display a color to fill the atmosphere.
              CCPL (Colombian Collegiate Programming League) (2014) - Classified for national collegiate programming and representation on regional collegiate programming competition.
              Hackaton 88nine (2017) - Java project for a Shazam like app for independent music.
              Hackaton Colpatria (2018) - Node (back) and Vue (front) application to share points with clients (via SMS) for shopping.
              Focus (2018-Present) - It’s a startup that will help students connect with others and teach grupal classes and share knowledge. Mobile application developed on Ionic Framework.
              PMC (2018) - It’s a visual recognition project to help shops analyze clients satisfaction by their facial emotions. Developed on python.</p>

          <br>
          <p>This is one of the projects I have worked in class: </p>
          <b-embed type="iframe"
                   aspect="16by9"
                   src="https://www.youtube.com/embed/CP0KWZ7-1BY?autoplay=1&mute=1"
                   allowfullscreen

          ></b-embed>
      </div>


      <v-parallax src="https://data.whicdn.com/images/325743671/large.jpg"></v-parallax>

      <b-container class="bv-example-row">
          <b-row>
              <b-col></b-col>
              <b-col sm="8" style="color:gray !important;">
                  <h3 id="experience">Job Experience</h3>
                  <p>
                      Part time call center agent on Sitel on Comcast campaign(for 8 months)					2016
                      Research Assitant at University of Wisconsin-Milwaukee (6 months) 2017
                      Front-End Junior Developer at Inalambria (2018-now)
                  </p>
                  <h3 id="skills">Skills</h3>
                  <p>
                      Knowledge: Frontend, backend, database, Http requests, programming languages, servers
                      Tools: Java, JavaScript, HTML, CSS, C++, SQLDeveloper, Assembly,Tomcat, Glassfish, Maven, Github
                      Other Participations: Neuro-Linguistic Psychology seminar, Wiring Challenge and CCPL programming contests.

                  </p>
                  <h3 id="hobbies">Hobbies</h3>
                  <p>Tenis, squash, trotar</p>

              </b-col>
          </b-row>
      </b-container>



  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    @import url('https://fonts.googleapis.com/css?family=Cinzel|Libre+Barcode+39+Text|Major+Mono+Display|Monoton|Pacifico');
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
    .profilediv {
        padding:10%;
    }
    #profile {
        font-family: 'Monoton', cursive;
    }
    #projects {
        font-family: 'Libre Barcode 39 Text', cursive;
    }
    #experience {

        font-family: 'Cinzel', serif;
    }
    #hobbies {

        font-family: 'Cinzel', serif;
    }
    #education {
        font-family: 'Major Mono Display', monospace;
    }
    #skills {
        font-family: 'Pacifico', cursive;
    }
</style>
