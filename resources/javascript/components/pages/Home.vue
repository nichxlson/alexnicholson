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
                            <span>Zawaya Property</span>
                        </article>
                    </router-link>
                </div>
                <div class="project-2-2">
                    <router-link to="projects/weatherbys-hamilton-app">
                        <article style="background-image: url('/assets/img/home/project-wh3.jpg');">
                            <span>Weatherbys Hamilton App</span>
                        </article>
                    </router-link>
                </div>
                <div class="project-1-1">
                    <router-link to="projects/cbl-website">
                        <article style="background-image: url('/assets/img/home/project-cbl.jpg');">
                            <span>Coffee Bike London</span>
                        </article>
                    </router-link>
                </div>
                <div class="project-1-1">
                    <router-link to="projects/functional-physio-website">
                        <article style="background-image: url('/assets/img/home/project-fp2.jpg');">
                            <span>Functional Physiotherapy</span>
                        </article>
                    </router-link>
                </div>
            </section>
        </div>

        <div class="wrapper">
            <section>
                <h2>Development</h2>

                <div class="two-column">
                    <div class="column">
                        <h3>Skills</h3>

                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript ES6</li>
                            <li>PHP</li>
                            <li>Java</li>
                            <li>API Integration</li>
                            <li>Laravel</li>
                            <li>VueJS</li>
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