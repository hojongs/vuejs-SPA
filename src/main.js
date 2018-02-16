import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './pages/Home.vue'
import Posts from './pages/Posts.vue'
import Post from './pages/Post.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', component: Post }
];

const router = new VueRouter({
	routes: routes
});

// Vue App
new Vue({
	el: '#app', // App.template의 #app
	render: h => h(App),
	router: router,
});
