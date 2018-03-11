<template>
	<div>
		<div id='stds'>
			<div class='std' v-for='std in students'>
				<h3>{{ std.name }}</h3>
				<img 
					:src='host + "/static/" + std.tb + ".jpg"'
					:style='"height: " + std.height + "px"'
				/><br>
				<input v-model='std.height'>
			</div>
		</div>
		<insert></insert>
	</div>
</template>

<script>
	import axios from 'axios';
	import host from 'host';
	import Insert from './TimeTables/Insert'

	export default {
		data() {
			return {
				host: host,
				students: [],
			};
		},
		created() { this.init(); },
		components: {
			'insert': Insert,
		},
		methods: {
			init() {
				axios.get(host + '/rest/students')
				.then(response => {
					// JSON responses are automatically parsed.
					this.students = response.data;
					console.log(response);
				})
				.catch(e => {
					console.log(e);
				});
			},
		}
	};
</script>

<style type="text/css">
	#stds {
		display: table;
		border-collapse:separate;
		border-spacing:1px;
	}
	.std {
		display: table-cell;
		border: 1px solid black;
		border-width: ;
		border-style: ;
		border-color: ;
	}
	img {
		width: 300px;
	}
</style>
