import { defineConfig } from 'iles'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
	vite: {
		ssr: { noExternal: ['vuetify'] }
	},
	components: {
		dirs: ['src/components', 'node_modules/vuetify'],
		resolvers: [Vuetify3Resolver()]
	}
})
