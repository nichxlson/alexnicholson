<template>
    <div class="page page-projects">
        <div class="wrapper">
            <section>
                <h1>Projects</h1>
                <p class="short-paragraph">Found below is a preview of a range of different projects I have created within a team. Each project is unique yet had been somewhat challenging, therefore had created an incentive for me to further develop my skills to successfully complete the task. The passion I have for web development, along with dedication, has resulted in the following work which I am extremely proud of;</p>
                <p class="short-paragraph" v-show="filter != null">Showing {{ filter }}s. Click <nuxt-link to="/projects">here</nuxt-link> to see all projects.</p>
            </section>
        </div>

        <div class="wrapper no-padding">
            <section class="projects no-padding">
                <nuxt-link :to="'/projects/' + project.slug" v-for="project in displayProjects" :key="project.slug">
                    <article :style="{ 'background-image': `url(${getImageUrl(project)})` }">
                        <div class="inner">
                            <span>{{ project.name }}</span>
                        </div>
                    </article>
                </nuxt-link>
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
        head() {
            return {
                title: 'Projects - Alex Nicholson | Full Stack Web Developer | Middlesbrough, UK',
                meta: [
                    { hid: 'tagName', itemprop: 'name', content: 'Projects - Alex Nicholson | Full Stack Web Developer | Middlesbrough, UK' },
                    { hid: 'facebookTitle', property: 'og:title', content: 'Projects - Alex Nicholson | Full Stack Web Developer | Middlesbrough, UK' },
                    { hid: 'twitterTitle', name: 'twitter:title', content: 'Projects - Alex Nicholson | Full Stack Web Developer | Middlesbrough, UK' },
                ]
            }
        },

        methods: {
            getImageUrl(project) {
                return require(`~/assets/images/projects/squares/${project.img}.jpg`);
            }
        },

        computed: {
            projects() {
                return this.$store.getters.getProjects || [];
            },

            displayProjects() {
                let filter = this.filter;

                if(filter != null) {
                    return this.projects.filter(project => {
                        return project.tags.includes(filter);
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
