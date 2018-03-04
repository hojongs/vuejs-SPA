<template>
	<div class='stds'>
		<div class='std' v-for='std in students'>
			<p>{{ std.name }}</p>
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
		width: 300px;
		display: table-cell;
	}
</style>
