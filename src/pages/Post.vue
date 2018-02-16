<template>
	<div>
		<h3></h3>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				contents: this.get_contents()
			};
		},
		methods: {
			get_contents: function() {
				return 'contents';
			}
		},
	};
</script>
