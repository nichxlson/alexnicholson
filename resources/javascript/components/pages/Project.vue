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
                <a data-fancybox="gallery" :href="'/assets/img/projects/screens/' + project.img + '/' + image" v-for="image in project.images" :style="{ backgroundImage: 'url(/assets/img/projects/screens/' + project.img + '/' + image + ')'}"></a>
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
    import ProjectStore from '../../stores/ProjectStore';

    export default {
        data() {
            return {
                project: null
            }
        },

        mounted() {
            this.project = ProjectStore.getProjectBySlug(this.$route.params.slug);
        }
    }
</script>