<template>
  <div class="bigcontent">
      <h3 id="profile">Profile</h3>
      <p>Estudiante de sexto semestre de Ingeniería de Sistemas en la Universidad de los Andes, bilingüe(inglés-español), amigable, cordial, competente para trabajar y dispuesta a aprender. En busca de puesto gratificante para comenzar prácticas profesionales para así aplicar el conocimiento ya obtenido durante la carrera.

        Experiencia como asistente de investigación en la Universidad de Wisconsin-Milwaukee en proyecto de Inteligencia Artificial que le permitieron obtener conocimientos de minería de datos, Watson, apis(Twitter y Reddit), IUI(Intelligence User Interface) y NLP(Natural Language Processing).

        Asimismo, habilidades en programación y lenguajes, destacados en la participación en varias maratones de programación durante el año pasado incluyendo competencias nacionales y regionales del CCPL(Colombian Collegiate Programming League).

        Adicional, de experiencia laboral 8 meses como agente bilingüe de call center en Sitel que le permitieron desarrollar habilidades como el buen trato con el cliente.
      </p>
      <h3 id="goal">Goal</h3>
      <p>
        Sixth semester student of Computer and System Engineering and Design at Los Andes University in Bogotá, Colombia.
        Friendly, gentle, kind and excited to learn. Looking for a research project in another country where to practice
        english skills and develop skills related to the career. Good scores on english tests such as TOELF,
        ICFES and CERF. Additional to this, participation on programming competitions on the Colombian Collegiate
        Programming League. Other experience include some experience in customer service working part time at a
        bilingual call center.
        Sixth semester student of Computer and System Engineering at Los Andes University in Bogotá, Colombia. Friendly, gentle, kind and anxious to learn. Looking for a research project in another country where to practice english skills and develop skills related to the career. Good scores on english tests such as TOELF, ICFES and CERF. Additional to this, participation on programming competitions on the Colombian Collegiate Programming League. Other experience include some experience in customer service working part time in an english call center.
      </p>

      <v-parallax src="https://data.whicdn.com/images/325743671/large.jpg"></v-parallax>

      <b-container class="bv-example-row">
          <b-row>
              <b-col></b-col>
              <b-col sm="8">
                  <h3 id="education">Education</h3>
                  <p>
                      High School at Gimnasio Vermont							2013
                      University at Los Andes University (1 year from graduation)	      	       		2013-now
                  </p>
                  <h3 id="experience">Job Experience</h3>
                  <p>
                      Part time call center agent on Sitel(for 8 months)					2016
                      Asistente de Investigación en Universidad de Wisconsin-Milwaukee(5 meses)		2017
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
</style>
