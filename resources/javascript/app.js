import axios from 'axios';
import VueRouter from 'vue-router';
import VueAnalytics from 'vue-analytics';

import Home from './components/pages/Home.vue';
import Projects from './components/pages/Projects.vue';
import Contact from './components/pages/Contact.vue';
import WeatherbysHamiltonApp from './components/pages/projects/WeatherbysHamiltonApp.vue';

require('./bootstrap');
require('es6-promise').polyfill();

const router = new VueRouter({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/projects',
        name: 'projects',
        component: Projects
    }, {
        path: '/projects/weatherbys-hamilton-app',
        name: 'project-wh',
        component: WeatherbysHamiltonApp
    }, {
        path: '*',
        name: '404',
        component: Contact
    }],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

const HTTP = axios.create({
    baseURL: window.An.url
});

const EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus;
        }
    },

    $http: {
        get: function () {
            return HTTP;
        }
    }
});

Vue.use(VueRouter);

Vue.use(VueAnalytics, {
    id: 'UA-123884265-1',
    router
});

Vue.component('example', require('./components/Example.vue'));
Vue.component('skill', require('./components/Skill.vue'));

const app = new Vue({
    router,
    el: '#app',

    data() {
        return {
            url: window.An.url,
        }
    },

    methods: {
    },

    mounted() {

    }
});