const _ = require('lodash');

export default {
    data: {
        projects: [{
            name: 'Weatherbys Hamilton Android App',
            slug: 'weatherbys-hamilton-app',
            tags: ['app'],
            img: 'wh',
            intro: 'Created an Android app that allows clients to view insurance policies, emergency contacts & closest office branches. Built a custom CMS & API in Laravel that account executives could use to manage customers.',
            link: null,
            technologies: ['Java', 'HTML5', 'CSS3', 'JavaScript', 'VueJS', 'PHP', 'Laravel'],
            images: ['screen-02.jpg', 'screen-01.jpg', 'screen-03.jpg', 'screen-09.jpg', 'screen-04.jpg', 'screen-05.jpg', 'screen-07.jpg', 'screen-08.jpg']
        }, {
            name: 'Coffee Bike London Website',
            slug: 'cbl-website',
            tags: ['website'],
            img: 'cbl',
            intro: 'Created a small responsive website in WordPress.',
            link: 'http://coffeebike.london/',
            technologies: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'jQuery', 'PHP', 'WordPress'],
            images: ['screen-02.jpg', 'screen-03.jpg', 'screen-04.jpg', 'screen-05.jpg', 'screen-06.jpg', 'screen-08.jpg']
        }, {
            name: 'Functional Physiotherapy Website',
            slug: 'functional-physio-website',
            tags: ['website'],
            img: 'fp',
            intro: 'Built a responsive website to help a client improve online presence. The website was built on CraftCMS so all content is editable. VueJS used for a contact form that can be submitted without refreshing the page.',
            link: 'https://functional-physio.co.uk/',
            technologies: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'VueJS', 'PHP', 'CraftCMS'],
            images: ['screen-01.jpg', 'screen-03.jpg', 'screen-06.jpg', 'screen-07.jpg']
        }, {
            name: 'Hywell Waters Website',
            slug: 'hywell-waters-website',
            tags: ['website'],
            img: 'hywell',
            intro: 'A website created for a photographer to help improve web presence. Built upon WordPress CMS so the photographer can add and update the different galleries on the website. Images are compressed and lazy loading is used to minimise load times across the website.',
            link: 'http://hywellwaters.com/',
            technologies: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'jQuery', 'PHP', 'WordPress'],
            images: ['screen-01.jpg', 'screen-04.jpg', 'screen-02.jpg', 'screen-03.jpg']
        }, {
            name: 'Sansaya Website',
            slug: 'sansaya-website',
            tags: ['website'],
            img: 'sansaya',
            intro: 'A WordPress website built for a client so they could display information on services they provide. Used a WordPress plugin to add extra fields to pages so that the client could attach videos to specific services.',
            link: 'http://sansayaclinic.com/',
            technologies: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'jQuery', 'PHP', 'WordPress'],
            images: ['screen-01.jpg', 'screen-02.jpg', 'screen-03.jpg', 'screen-09.jpg', 'screen-10.jpg', 'screen-11.jpg']
        }]
    },

    getProjectBySlug(slug) {
        return _.find(this.data.projects, function(project) {
            return project.slug == slug;
        });
    }
}