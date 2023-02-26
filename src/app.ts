import { defineApp } from 'iles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify'

const vuetify = createVuetify({
	components,
	directives
})

export default defineApp({
	enhanceApp(ctx) {
		ctx.app.use(vuetify)
	}
})
