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
                            <skill percentage="70">JavaScript ES6</skill>
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

                <p>My love for developing started in secondary school when I was playing around with Java, modding my favourite games to do dumb little things, such as showing my name or updating textures.</p>

                <p>I then started creating small websites for those games, displaying basic information, or showing in game images. For one site I had linked a system that used PHP and MySQL to show stats from in game to display onto the website.</p>

                <p>After creating those small basic websites, I wanted to practice more and pushing my skills further. I began to re-create shots from <a href="https://dribbble.com/" target="_blank">Dribbble</a> and turn them into working pages. By doing this I was able improve my knowledge and began learning new technologies such as jQuery & Sass.</p>

                <p>Upon getting my first development job I was able to learn more languages and create more advanced websites and applications. Over the 3 years I have learned Laravel to build an API, VueJS to plug dynamic components onto websites and Java to create an Android app. During my employment, I was responsible for setting up new websites on the Linux server and deploying scripts to them.</p>

                <p>In the future I would like to focus more on improving my skills even more - pushing myself to create only the best work.</p>
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