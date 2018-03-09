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
			<h2>Update Student TimeTable</h2>

			<div v-for='field in fields_update'>
				{{ field.name }} : 
				<input :name='field.name' :type='field.type' @change='change_fields_update'>
			</div>
			<button @click='update(formdata_update)'>button</button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import host from '../host';

	export default {
		data() {
			return {
				host: host,
				students: [],
				errors: [],
				fields_update: [
					{name: 'name', type: 'text'},
					{name: 'tb', type: 'file'},
					{name: 'height', type: 'text'},
				],
				formdata_update: new FormData(),
			};
		},
		created() { this.init(); },
		methods: {
			init() {
				axios.get(host + '/rest/students')
				.then(response => {
					// JSON responses are automatically parsed.
					this.students = response.data
				})
				.catch(e => {
					this.errors.push(e)
				});
			},
			update(data) {
				const config = {
					headers: {'Content-Type': 'multipart/form-data',},
				};

				axios.put(host + '/rest/students', data, config)
				.then(response => {
					console.log(response);
					this.init();
				})
				.catch(e => {
					this.errors.push(e)
				});
			},
			change_fields_update(event) {
				var target = event.target;
				
				switch (target.type) {
					case 'text':
						this.formdata_update.append(target.name, target.value);
						break;
					case 'file':
						var file = target.files[0];
						this.formdata_update.append(target.name, file, file.name);
						break;
					default:
						throw new Error('NotImplementedError');
				}

				// debug
				for (var pair of this.formdata_update.entries())
					console.log(pair[0] + ', ' + pair[1]);
			}
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
