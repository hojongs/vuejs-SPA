<template>
	<div id="app">
		<h1>Hojong Blog</h1>
		<p>
			<router-link to="/home">Home</router-link>
			<router-link to="/timetables">TimeTables</router-link>
			<router-link to="/posts">Posts</router-link>
			<router-link to="/test">Test</router-link>
		</p>
		<!-- route outlet -->
		<!-- 라우트와 일치하는 컴포넌트가 여기 렌더링됩니다. -->
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app',
}
</script>

<style>
</style>
