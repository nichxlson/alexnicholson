<template>
    <div class="page page-projects">
        <div class="wrapper">
            <section>
                <h1>Projects</h1>
                <p class="short-paragraph">Below are a selection of different projects I have worked on. Although each project has been different and some were challenging, they have all been crafted with love.</p>
                <p class="short-paragraph" v-show="filter != null">Showing {{ filter }}s. Click <router-link to="/projects">here</router-link> to see all projects.</p>
            </section>
        </div>

        <div class="wrapper no-padding">
            <section class="projects no-padding">
                <router-link :to="'/projects/' + project.slug" v-for="project in displayProjects">
                    <article :style="{ backgroundImage: getImageUrl(project) }">
                        <div class="inner">
                            <span>{{ project.name }}</span>
                        </div>
                    </article>
                </router-link>
            </section>
        </div>

        <div class="wrapper" style="display: none;">
            <section>
                <p>The source code for many of the projects above have been kept private due to various reasons.</p>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                projects: [{
                    name: 'Weatherbys Hamilton Android App',
                    slug: 'weatherbys-hamilton-app',
                    tags: ['app'],
                    img: 'wh',
                }, {
                    name: 'Zawaya Property Website',
                    slug: 'zawaya-property-website',
                    tags: ['website'],
                    img: 'zawaya',
                }, {
                    name: 'Coffee Bike London Website',
                    slug: 'cbl-website',
                    tags: ['website'],
                    img: 'cbl',
                }, {
                    name: 'Functional Physiotherapy Website',
                    slug: 'functional-physio-website',
                    tags: ['website'],
                    img: 'fp',
                }, {
                    name: 'Hywell Waters Website',
                    slug: 'hywell-waters-website',
                    tags: ['website'],
                    img: 'hywell',
                }, {
                    name: 'WorldCOB Website',
                    slug: 'worldcob-website',
                    tags: ['website'],
                    img: 'worldcob',
                }, {
                    name: 'Sohar Calculator App',
                    slug: 'sohar-calculator-app',
                    tags: ['app', 'website'],
                    img: 'sohar-calculator',
                }, {
                    name: 'Sansaya Website',
                    slug: 'sansaya-website',
                    tags: ['website'],
                    img: 'sansaya',
                }]
            }
        },

        methods: {
            getImageUrl(project) {
                return 'url(/assets/img/projects/squares/' + project.img + '.jpg)';
            }
        },

        computed: {
            displayProjects() {
                let filter = this.filter;

                if(filter != null) {
                    return _.filter(this.projects, function(project) {
                        return _.includes(project.tags, filter);
                    });
                }

                return this.projects;
            },

            filter() {
                return this.$route.query.type;
            }
        },

        mounted() {
        }
    }
</script>