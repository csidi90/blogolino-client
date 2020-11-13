import colors from 'vuetify/es5/util/colors';

export default {
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head         : {
		title : 'Blogolino',
		meta  : [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link  : [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css          : [
		'~/css/main.css'
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins      : [],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components   : true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules : [
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify'
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules      : [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',

		'@nuxtjs/firebase'
	],

	firebase     : {
		config   : {
			apiKey            : 'AIzaSyDd_7w6km0MpWFiU10s70zQkOqEnuAeVp4',
			authDomain        : 'blogolino-fb3c3.firebaseapp.com',
			databaseURL       : 'https://blogolino-fb3c3.firebaseio.com',
			projectId         : 'blogolino-fb3c3',
			storageBucket     : 'blogolino-fb3c3.appspot.com',
			messagingSenderId : '78750137279',
			appId             : '1:78750137279:web:a58a13bc2b4447c4d9bf0a',
			measurementId     : 'G-9ZYD3HFJ0F'
		},
		services : {
			auth      : true,
			firestore : true
		}
	},
	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios        : {},

	// Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
	vuetify      : {
		defaultAssets   : {
			icons : 'fa',
			font  : {
				family : 'Roboto'
			}
		},
		customVariables : [
			'~/assets/variables.scss'
		],
		theme           : {
			light  : true,
			themes : {
				light : {
					primary : '#D9B100'
				}
			}
		}
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build        : {}
};
