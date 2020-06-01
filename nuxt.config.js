
export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'format-detection', content: 'telephone=no' },

            { hid: 'description', name: 'description', content: 'Full Stack Web Developer based in Middlesbrough, UK. Passionate about creating vibrant & functional websites and apps.' },

            { hid: 'tagDescription', itemprop: 'description', content: 'Full Stack Web Developer based in Middlesbrough, UK. Passionate about creating vibrant & functional websites and apps.' },

            { hid: 'facebookUrl', property: 'og:url', content: 'https://alexnicholson.co.uk' },
            { hid: 'facebookUrl', property: 'og:type', content: 'website' },
            { hid: 'facebookDescription', property: 'og:description', content: 'Full Stack Web Developer based in Middlesbrough, UK. Passionate about creating vibrant & functional websites and apps.' },

            { hid: 'twitterCard', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitterDescription', name: 'twitter:description', content: 'Full Stack Web Developer based in Middlesbrough, UK. Passionate about creating vibrant & functional websites and apps.' },

            { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Alex Nicholson' },
            { hid: 'application-name', name: 'application-name', content: 'Alex Nicholson' },
            { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#da532c' },
            { hid: 'msapplication-config', name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
            { hid: 'theme-color', name: 'theme-color', content: '#ffffff' },
        ],
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js' }
        ],
        link: [
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
            { rel: 'manifest', href: '/favicon/site.webmanifest' },
            { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
            { rel: 'shortcut icon', href: '/favicon/favicon.ico' },

            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/main.scss'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        ['@nuxtjs/google-analytics', {
            id: 'UA-123884265-1'
        }]
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
    ],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        }
    },

    transition: 'fade',

    generate: {
        routes() {
            const projects = this.$store.getters.getProjects;

            return projects.map(project => {
                return '/projects/' + project.slug;
            })
        }
    }
}
