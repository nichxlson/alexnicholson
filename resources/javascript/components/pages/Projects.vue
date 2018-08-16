<template>
    <div class="page page-projects">
        <div class="wrapper">
            <section>
                <h1>Projects</h1>
                <p class="short-paragraph">Found below is a preview of a range of different projects I have created within a team. Each project is unique yet had been somewhat challenging, therefore had created an incentive for me to further develop my skills to successfully complete the task. The passion I have for web development, along with dedication, has resulted in the following work which I am extremely proud of;</p>
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
    import ProjectStore from '../../stores/ProjectStore';

    export default {
        data() {
            return {
                projects: ProjectStore.data.projects
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