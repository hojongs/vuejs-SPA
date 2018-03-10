import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './pages/Home.vue'
import TimeTables from './pages/TimeTables.vue'
import Posts from './pages/Posts.vue'
import Post from './pages/Post.vue'
import Test from './pages/Test.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
  { path: '/timetables', component: TimeTables },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', component: Post },
  { path: '/test', component: Test },
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
