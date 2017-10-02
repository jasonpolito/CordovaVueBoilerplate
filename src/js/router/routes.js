import Home from '../views/Home';

let routes = [
	{
		path: '/',
		name: 'One',
		component: {template: '<h1>One</h1>'},
	},
	{
		path: '/two',
		name: 'Two',
		component: {template: '<h1>Two</h1>'},
	},
	{
		path: '/three',
		name: 'Three',
		component: {template: '<h1>Three</h1>'},
	}
];

export default routes;