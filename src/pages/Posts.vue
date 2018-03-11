<template>
	<div>
		<h3>Posts</h3>
		<ul>
			<router-link tag='li' v-for='post in posts' 
				:key='post.id'
				:to='"/posts/" + post.id'>
				<a>
					<span class='title'>{{ post.title }}</span>
					<span class='author'>{{ post.author }}</span>
					<span class='date'>{{ post.date }}</span>
				</a>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	import host from 'host';

	export default {
		data: function() {
			return {
				host: host,
				posts: [],
				errors: [],
			};
		},
		created() {
			axios.get(host + '/rest/posts')
			.then(response => {
				// JSON responses are automatically parsed.
				this.posts = response.data
			})
			.catch(e => {
				this.errors.push(e)
			});
		},
	};
</script>

<style>
	span.title {
		background-color: #dd88ff;
	}
	span.author {
		background-color: #aaccff;
	}
	span.date {
		background-color: #ffaacc;
	}
</style>
