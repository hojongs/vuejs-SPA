<template>
	<div class='stds'>
		<div class='std' v-for='std in students'>
			<h3>{{ std.name }}</h3>
			<img :src='host + "/static/" + std.tb + ".jpg"' />
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import host from '../host';

	export default {
		data: function() {
			return {
				host: host,
				students: [],
				errors: [],
			};
		},
		created() {
			axios.get(host + '/rest/students')
			.then(response => {
				// JSON responses are automatically parsed.
				this.students = response.data
			})
			.catch(e => {
				this.errors.push(e)
			});
		},
	};
</script>

<style type="text/css">
	.stds {
		display: table;
	}
	.std {
		display: table-cell;
	}
	img {
		width: 300px;
		height: 600px;
	}
</style>
