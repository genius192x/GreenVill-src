import { createApp } from 'vue'
import App from './App.vue'
import Mycomponents from './components/UI'
import router from './router'
import 'vuetify/styles'
import SmoothPicker from 'vue-smooth-picker'
import 'vue-smooth-picker/dist/css/style.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from './store'
import { Quasar, LocalStorage } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const vuetify = createVuetify({
	components,
	directives,
})

const app = createApp(App).use(Quasar, quasarUserOptions)

Mycomponents.forEach(component => {
	app.component(component.name, component)
})

app
.use(router)
.use(store)
.use(SmoothPicker)
.use(Quasar, {
	plugins: {	
		LocalStorage
	}
  })
.mount('#app')
