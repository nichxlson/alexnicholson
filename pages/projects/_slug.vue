<template>
    <div class="page page-project" v-if="project">
        <div class="wrapper">
            <section>
                <h1>{{ project.name }}</h1>
                <p class="short-paragraph" v-html="project.intro"></p>
            </section>
        </div>

        <div class="wrapper no-padding" v-if="project.images && project.images.length">
            <section class="gallery no-padding">
                <a data-fancybox="gallery" :href="getImageUrl(image)" v-for="image in project.images" :style="{ 'background-image': `url(${getImageUrl(image)})` }"></a>
            </section>
        </div>

        <div class="wrapper" v-if="project.technologies" :class="{ 'no-top-padding': (!project.images || project.images.length == 0) }">
            <section class="technologies">
                <h2>Technologies</h2>
                <div class="technology" v-for="technology in project.technologies">
                    <span>{{ technology }}</span>
                </div>
            </section>
        </div>

        <div class="wrapper no-padding" v-if="project.link">
            <section class="cta">
                <a :href="project.link" target="_blank">View Website</a>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        middleware: 'exists',

        head() {
            return {
                title: `${this.project.name} - Alex Nicholson | Full Stack Web Developer | Middlesbrough, UK`,
                meta: [
                    { hid: 'tagName', itemprop: 'name', content: `${this.project.name} - Alex Nicholson | Full Stack Web Developer | Middlesbrough, UK` },
                    { hid: 'facebookTitle', property: 'og:title', content: `${this.project.name} - Alex Nicholson | Full Stack Web Developer | Middlesbrough, UK` },
                    { hid: 'twitterTitle', name: 'twitter:title', content: `${this.project.name} - Alex Nicholson | Full Stack Web Developer | Middlesbrough, UK` },
                ]
            }
        },

        methods: {
            getImageUrl(image) {
                const directory = this.project.img;
                return require(`~/assets/images/projects/screens/${directory}/${image}`);
            }
        },

        computed: {
            project() {
                return this.$store.getters.getProjectBySlug(this.$route.params.slug);
            }
        }
    }
</script>
