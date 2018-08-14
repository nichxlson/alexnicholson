<template>
    <div class="page-home">
        <div class="wrapper">
            <section>
                <h1>Hi, I'm Alex</h1>
                <p>I am a Full Stack Web Developer based in Middlesbrough, UK. I am passionate about building <strong>vibrant</strong> & <strong>functional</strong> <router-link :to="{ path: 'projects', query: { type: 'website' } }">websites</router-link> and <router-link :to="{ path: 'projects', query: { type: 'app' } }">apps</router-link>. Here are some of the projects I have worked on;</p>
            </section>
        </div>

        <div class="wrapper no-padding">
            <section class="projects no-padding">
                <div class="project-2-1">
                    <router-link to="projects/zawaya-property-website">
                        <article style="background-image: url('/assets/img/home/project-zawaya3.jpg');">
                            <span>Zawaya Property Website</span>
                        </article>
                    </router-link>
                </div>
                <div class="project-2-2">
                    <router-link to="projects/weatherbys-hamilton-app">
                        <article style="background-image: url('/assets/img/home/project-wh3.jpg');">
                            <span>Weatherbys Hamilton Android App</span>
                        </article>
                    </router-link>
                </div>
                <div class="project-1-1">
                    <router-link to="projects/cbl-website">
                        <article style="background-image: url('/assets/img/home/project-cbl.jpg');">
                            <span>Coffee Bike London Website</span>
                        </article>
                    </router-link>
                </div>
                <div class="project-1-1">
                    <router-link to="projects/functional-physio-website">
                        <article style="background-image: url('/assets/img/home/project-fp2.jpg');">
                            <span>Functional Physiotherapy Website</span>
                        </article>
                    </router-link>
                </div>
            </section>
        </div>

        <div class="wrapper" style="display: none;">
            <section>
                <h2>Development</h2>

                <div class="two-column">
                    <div class="column">
                        <h3>Skills</h3>

                        <ul>
                            <skill percentage="90">HTML5</skill>
                            <skill percentage="90">CSS3</skill>
                            <skill percentage="60">JavaScript ES6</skill>
                            <skill percentage="85">jQuery</skill>
                            <skill percentage="80">PHP</skill>
                            <skill percentage="80">MySQL</skill>
                            <skill percentage="50">Java</skill>
                            <skill percentage="80">API Integration</skill>
                            <skill percentage="80">Laravel</skill>
                            <skill percentage="80">VueJS</skill>
                        </ul>
                    </div>

                    <div class="column">
                        <h3>Tools</h3>

                        <ul>
                            <li>PhpStorm / Visual Studio Code</li>
                            <li>Photoshop</li>
                            <li>Git</li>
                            <li>Gulp / Webpack / Laravel Mix</li>
                            <li>Sass</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>

        <div class="wrapper">
            <section>
                <h2>About Me</h2>

                <p>My passion for developing started in secondary school when I began to experiment with Java to allow myself to change my username in game or update a range of textures.</p>

                <p>I then began to create small websites for the games in order to display basic information and show game images. For example, one site consisted of a linked system which used PHP and MySQL to display in game stats onto the website.</p>

                <p>After creating and experimenting with these websites I became more intrigued and captivated by developing therefore wanted to develop my skills further. Consequently, I began to recreate shots from <a href="https://dribbble.com/" target="_blank">Dribbble</a> and convert them into working pages. This allowed me to greatly improve my knowledge and become more familiar with new technologies such as jQuery and Sass.</p>

                <p>Upon obtaining my first development job I had the opportunity to develop my skills and knowledge regarding languages. Consequently, I am now able to create more advanced websites and applications, which can be previewed <router-link to="/projects">here</router-link>. During my three years of employment at <a href="https://newborne.co.uk" target="_blank">Newborne</a> I have familiarised myself with Laravel to build APIs, middleware & endpoints. I have used VueJS to create single page applications & plug dynamic components onto existing websites and Java to create an Android application. Furthermore, I was responsible for setting up new websites on the Linux server and deploying scripts to them.</p>

                <p>Moreover, I am continuously looking for ways in which I advance my skills and knowledge to further improve my work.</p>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },

        mounted() {
        }
    }
</script>