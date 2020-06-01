<template>
    <div class="page">
        <div class="wrapper">
            <section>
                <h1 v-if="error.message">{{ error.message }}</h1>
                <h1 v-else-if="error.statusCode === 404">Page not found</h1>
                <h1 v-else>An error occurred</h1>

                <p>Try going back <nuxt-link to="/">home</nuxt-link></p>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['error'],

        transition: 'fade',

        head() {
            let message = 'An error occurred';

            if(this.error.message) {
                message = this.error.message;
            } else if(this.error.statusCode === 404) {
                message = 'Page not found';
            }

            return {
                title: `${message} - Alex Nicholson | Full Stack Web Developer | Middlesbrough, UK`,
                meta: [
                    { hid: 'tagName', itemprop: 'name', content: `${message} - Alex Nicholson | Full Stack Web Developer | Middlesbrough, UK` },
                    { hid: 'facebookTitle', property: 'og:title', content: `${message} - Alex Nicholson | Full Stack Web Developer | Middlesbrough, UK` },
                    { hid: 'twitterTitle', name: 'twitter:title', content: `${message} - Alex Nicholson | Full Stack Web Developer | Middlesbrough, UK` },
                ]
            }
        },
    }
</script>
