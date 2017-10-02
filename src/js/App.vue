<template>
	<div id="app">
		<v-app>
			<v-tabs grow light>
				<v-toolbar>
					<v-toolbar-title>{{ title }}</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-btn icon>
						<v-icon>search</v-icon>
					</v-btn>
					<v-btn icon>
						<v-icon>more_vert</v-icon>
					</v-btn>
					<v-tabs-bar class="grey lighten-4" slot="extension">
						<v-tabs-slider class="primary"></v-tabs-slider>
						<v-tabs-item v-for="route in routes" :to="route.path" :key="route.path" exact>{{ route.name }}</v-tabs-item>
					</v-tabs-bar>
				</v-toolbar>
			</v-tabs>
			<v-card flat>
				<v-card-text>
					<router-view></router-view>
				</v-card-text>
			</v-card>
		</v-app>
	</div>
</template>

<script type="text/javascript">
import routes from './router/routes';
export default {
	data() {
		return {
			title: 'New App',
			menu: false,
			test: 'something',
			routes
		}
	}
}
</script>

<style>
	#app {
		transform: translate3d(0,0,1px);
	}
</style>
