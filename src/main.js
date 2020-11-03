import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './scss/main.scss';

//  import axios
import axios from 'axios';

Vue.config.productionTip = false;

new Vue({
    router,
    axios,
    render: (h) => h(App),
}).$mount('#app');
