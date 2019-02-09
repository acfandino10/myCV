# myCV

## Reasons why I used Vuetify and Bootstrap 

This project was created with the use of Frameworks. I started working with Bootstrap but honestly, there was one I remembered I used before and had way more components than Bootstrap. I wanted to add a Parallax element and Vuetify was the only one that had it.That's why I decided to use both Frameworks.

## To Run my CV

If you want to run it locally there's a change that must be done in the components MainBar and TheBanner. The navigation bar that actually looks like this:

              <b-navbar-nav>
                    <b-nav-item href="#profile">Profile</b-nav-item>
                    <b-nav-item href="#projects">Projects</b-nav-item>
                    <b-nav-item href="#education">Education</b-nav-item>
                    <b-nav-item href="#experience">Experience</b-nav-item>
                    <b-nav-item href="#skills">Skills</b-nav-item>
                    <b-nav-item href="#hobbies">Hobbies</b-nav-item>
                </b-navbar-nav>
                
 Must be replaced with one like this:
 
              <b-navbar-nav>
                    <b-nav-item href="MyMainCV.html#profile">Profile</b-nav-item>
                    <b-nav-item href="MyMainCV.html#projects">Projects</b-nav-item>
                    <b-nav-item href="MyMainCV.html#education">Education</b-nav-item>
                    <b-nav-item href="MyMainCV.html#experience">Experience</b-nav-item>
                    <b-nav-item href="MyMainCV.html#skills">Skills</b-nav-item>
                    <b-nav-item href="MyMainCV.html#hobbies">Hobbies</b-nav-item>
               </b-navbar-nav>
 
 plus an import on the script
 
    import MyMainCV from "./MyMainCV";
    
Then, you just run:

    npm install
    npm run serve
 
 The reason of this change is because on the deployed version the dist changes the directions of the folders and this components are on the same page so it works fine with just #hobbies instead of MyMainCV.html#hobbies on the href.
 
 ## The Deployed Version
 
 You can check out the deployed version [here](http://ana-cv.surge.sh).
