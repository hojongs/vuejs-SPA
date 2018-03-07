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
		<div>
			<h2>Insert Student</h2>

			<div v-for='field in fields_insert'>
				{{ field.name }} : 
				<input :name='field.name' :type='field.type' @change='change_fields_insert'>
			</div>
			<button @click='insert(formdata_insert)'>button</button>
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
				fields_insert: [
					{name: 'name', type: 'text'},
					{name: 'tb', type: 'file'},
					{name: 'height', type: 'text'},
				],
				formdata_insert: new FormData(),
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
		methods: {
			insert(data) {
				const config = {
					headers: {'Content-Type': 'multipart/form-data',},
				};

				axios.put(host + '/rest/students', data, config)
				.then(response => {
					console.log(response);
				})
				.catch(e => {
					this.errors.push(e)
				});
			},
			change_fields_insert(event) {
				var target = event.target;
				
				switch (target.type) {
					case 'text':
						this.formdata_insert.append(target.name, target.value);
						break;
					case 'file':
						var file = target.files[0];
						this.formdata_insert.append(target.name, file, file.name);
						break;
					default:
						break;
				}

				// debug
				for (var pair of this.formdata_insert.entries())
					console.log(pair[0] + ', ' + pair[1]);
			}
		}
	};
</script>

<style type="text/css">
	#stds {
		display: table;
	}
	.std {
		display: table-cell;
	}
	img {
		width: 200px;
	}
</style>
