<template>
	<div>
		<h2>Update Student TimeTable</h2>

		<div v-for='field in fields_update'>
			{{ field.name }} : 
			<input :name='field.name' :type='field.type' @change='change_fields_update'>
		</div>
		<button @click='update(formdata_update)'>button</button>
	</div>
</template>

<script>
	import axios from 'axios';
	import host from 'host';

	export default {
		data() {
			return {
				fields_update: [
					{name: 'name', type: 'text'},
					{name: 'tb', type: 'file'},
					{name: 'height', type: 'text'},
				],
				formdata_update: new FormData(),
			}
		},
		methods: {
			update(data) {
				const config = {
					headers: {'Content-Type': 'multipart/form-data',},
				};

				axios.put(host + '/rest/students', data, config)
				.then(response => {
					console.log(response);
					this.init();
					alert(response.statusText);
				})
				.catch(e => {
					console.log(e);
					alert(e);
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
	}
</script>

