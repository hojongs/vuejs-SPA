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
	export default {
		data: function() {
			return {posts: this.get_posts()};
		},
		methods: {
			get_posts: function() {
				return [
					{
						id: '1',
						title: 'title1',
						author: 'author1',
						date: '2018-01-01',
					},
					{
						id: '2',
						title: 'title2',
						author: 'author2',
						date: '2018-01-02',
					},
				]
			}
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
