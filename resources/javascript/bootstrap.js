window._ = require('lodash');

window.$ = window.jQuery = require('jquery');

window.Vue = require('vue');

window.axios = require('axios');

window.axios.defaults.baseURL = window.An.url;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
