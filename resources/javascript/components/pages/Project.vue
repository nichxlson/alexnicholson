<template>
    <div class="page page-project" v-if="project">
        <div class="wrapper">
            <section>
                <h1>{{ project.name }}</h1>
                <p class="short-paragraph" v-html="project.intro"></p>
            </section>
        </div>

        <div class="wrapper no-padding" v-if="project.link">
            <section class="cta">
                <a :href="project.link" target="_blank">View Website</a>
            </section>
        </div>

        <div class="wrapper" v-if="project.technologies" :class="{ 'no-top-padding': !project.link }">
            <section class="technologies">
                <h2>Technologies</h2>
                <div class="technology" v-for="technology in project.technologies">
                    <span>{{ technology }}</span>
                </div>
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