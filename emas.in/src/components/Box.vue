<template>
	<div class="box">
		<img class="icon-box" v-bind:src="imagePath">
		<p>{{ name }}</p>
	</div>
</template>

<script>
	export default {
		props: ['icon', 'name'],
		computed: {
			imagePath() {
				return require('../assets/' + this.icon);
			}
		}
	}
</script>

<style scoped>
	.box {
		width: 100%;
		height: 98px;
		border-radius: 8px;
		border: 1px solid #dddddd;
		padding: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
	}

	.box .icon-box {
		height: 35px;
		margin-bottom: 10px;
	}

	.box p {
		color: #222;
		text-align: center;
		font-size: 14px;
	}

</style>
