<template>
	<div>
		<h2>Insert/Update TimeTable</h2>
		<div v-for='field in fields'>
			{{ field.name }} : 
			<input :name='field.name' :type='field.type' @change='update_data'>
		</div>
		<button @click='put_data(json_data, tb)'>submit</button>
	</div>
</template>

<script>
	import axios from 'axios';
	import host from 'host';

	export default {
		data() {
			return {
				fields: [ // for generation input tag
					{name: 'name', type: 'text'},
					{name: 'tb', type: 'file'},
					{name: 'height', type: 'text'},
				],
				json_data: {}, // of FormData
				tb: {}, // of FormData
			};
		},
		methods: {
			update_data(event) {
				var target = event.target;
				console.log('update_data():', target.value);

				switch (target.type) {
					case 'text':
						this.json_data[target.name] = target.value;
						break;
					case 'file':
						var file = target.files[0];
						this.tb = {
							'name': target.name,
							'file': file,
						};
						console.log(file, this.tb);
						break;
					default:
						throw new Error('NotImplementedError');
				}
			},
			put_data(json_data, tb) {
				const config = {
					headers: {'Content-Type': 'multipart/form-data',},
				};
				var formdata = new FormData();
				formdata.set('json_data', JSON.stringify(json_data));
				formdata.set(tb.name, tb.file);

				axios.put(host + '/rest/students', formdata, config)
				.then(response => {
					console.log(response);
					alert(response.statusText);
				})
				.catch(e => {
					console.log(e);
					alert(e);
				});
			},
		}
	}
</script>

