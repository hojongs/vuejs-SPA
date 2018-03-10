<template>
	<div>
		<p class='data' v-for='i in data'>{{ i.title }}</p>
	</div>
</template>

<script>
	import axios from 'axios';
	import host from '../host';

	export default {
		data() {
			return {
				host: host,
				data: [],
				errors: [],
			};
		},
		created() { this.init(); },
		methods: {
			init() {
				this.data.push({
					title: 'test-1',
					contents: 'test-con-1',
				});
				this.data.push({
					title: 'test-2',
					contents: 'test-con-2',
				});
				console.log(this.data);

				// axios.get(host + '/rest/students')
				// .then(response => {
				// 	// JSON responses are automatically parsed.
				// 	this.students = response.data;
				// 	console.log(response);
				// })
				// .catch(e => {
				// 	this.errors.push(e);
				// 	console.log(e);
				// });
			},
		}
	};
</script>

<style type="text/css">
	.data {
		margin: 0px;
	}
</style>
