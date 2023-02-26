- [x] I have read the __[troubleshooting section]__ before opening an issue.
- [x] I have tried upgrading `iles` and `vite`.

### Description 📖

So far I've been able to reproduce this with both Vuetify (`VLayout`) and Inkline (`ILayout`). This is with the appropriate resolvers (`Vuetify3Resolver`, `InklineResolver`) from `unplugin-vue-components/resolvers`.

```typescript
// iles.config.ts
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

```

```typescript
 // components.d.ts
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // ...
    VLayout: typeof import('./src/layouts/v.vue')['default'] // expected: typeof import('vuetify/components')['VLayout']
    // ...
    VList: typeof import('vuetify/components')['VList']
    VListItem: typeof import('vuetify/components')['VListItem']
    VNavigationDrawer: typeof import('vuetify/components')['VNavigationDrawer']
  }
}
```

### Reproduction 🐞

[Available here](https://github.com/rsek/iles-layout-bug-repro). This reproduces it with Vuetify, but the same pattern is apparent with Inkline's `ILayout`, where it points to `src/layouts/i.vue` instead of `src/layouts/v.vue`.

<details>
<summary>Dependencies Info</summary>

_Run `npx iles info` and `pnpm list` (or `npm list`) and provide the output:_


`npx iles info`: `iles v0.9.2 vite v4.1.4`

`npm list`:
```
iles-layout-bug@0.0.0 /home/rsek/Development/GitHub/iles-layout-bug-repro
├── iles@0.9.2
├── npm@9.5.1
├── sass@1.58.3
├── typescript@4.9.5
├── vite@4.1.4
├── vue-tsc@0.38.9
└── vuetify@3.1.6
```
</details>
