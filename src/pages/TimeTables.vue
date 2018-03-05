<template>
	<div class='stds'>
		<div class='std' v-for='std in students'>
			<h3>{{ std.name }}</h3>
			<img :src='"/static/" + std.tb + ".jpg"' />
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {students: this.get_student()};
		},
		methods: {
			get_student: function() {
				return [
					{
						name: '전종호',
						tb: 'jjh'
					},
					{
						name: '김명길',
						tb: 'kmg'
					},
					{
						name: '김용우',
						tb: 'kyy'
					},
				]
			}
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
