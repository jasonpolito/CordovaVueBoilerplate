import Vue from 'vue';
import Vuetify from 'vuetify';
import router from './router';
import App from './App';
import VueFire from 'vuefire'
import store from './store'

Vue.use(VueFire);
Vue.use(Vuetify);

function init() {
	new Vue({
		el: '#app',
		store,
		router,
		render: h => h(App)
	});
	router.push('/');
}

if (window.cordova) {
	document.addEventListener('deviceready', init, false);
} else {
	init();
}