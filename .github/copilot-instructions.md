# Copilot Instructions for vue-project

## Project Overview
This is a **Vue 3 educational project** built with Vite, focusing on Vue fundamentals through example components. It's designed to teach Vue concepts like reactivity, computed properties, lifecycle hooks, and template syntax.

## Architecture & Key Patterns

### Vue 3 Composition API with `<script setup>`
- **All components use `<script setup>`** (modern, concise syntax)
- State managed with `ref()` for primitives and `reactive()` for objects
  - Example: `const count = ref(0)` in `BaseButton.vue`
  - Use `.value` access in scripts: `count.value++`
  - No `.value` needed in templates—auto-unwrapped
- **Computed properties** for derived state: `const fullName = computed(() => ...)`
- See: `src/components/ComputedExamples.vue`, `ReactiveExamples.vue`

### Component Organization
- **Base components** (reusable UI): `src/components/BaseButton.vue`, `BaseSample.vue`
- **Example components** (educational demos): `VForExamples*.vue`, `LifeHooks.vue`, etc.
- **Global registration** in `src/main.js`: BaseButton registered app-wide
- **Path alias**: `@` → `./src/` (configured in `vite.config.js`)

### Data Management
- Static data in `src/data/books.js` exported as named exports (e.g., `books` array)
- Component state with `ref`/`reactive`; no state management library needed
- Components are isolated—prefer prop/emit for parent-child communication when needed

### Template Patterns
- **Directives**: `v-for`, `v-if`, `v-bind`, `v-on` (or shorthand `@`)
- **Key binding in v-for**: Use stable keys like `:key="`${index}-${item}`"` (see `VForExamples01.vue`)
- **Computed ternary** for conditional display: `{{ isButtonDisabled ? 'Disabled' : 'Enabled' }}`
- **Binding attributes**: `:src`, `:disabled`, `:key` (shorthand for `v-bind`)

## Development Workflow

### Available Commands
```bash
npm run dev        # Start dev server with hot-reload (Vite)
npm run build      # Production build (dist/ output)
npm run preview    # Preview production build
npm run lint       # ESLint + auto-fix with Prettier formatting
npm run format     # Prettier format only (src/)
```

### Key Files to Know
- **Entry point**: `src/main.js` (creates app, registers globals)
- **Root component**: `src/App.vue` (uses BaseButton, setup example)
- **Vite config**: `vite.config.js` (Vue plugin, path alias, devtools)
- **Lint config**: `eslint.config.js` (flat config, Vue plugin, Prettier integration)
- **Node requirement**: Node ^20.19.0 || >=22.12.0

## Code Style & Conventions

### Naming
- Components: PascalCase (`BaseButton.vue`, `ComputedExamples.vue`)
- Variables/functions: camelCase (`fullName`, `isButtonDisabled`)
- HTML attributes: kebab-case in templates (Vue handles conversion)

### Code Organization
- **Script first** (imports, setup logic), **template second**, **style last** (often external `<style src="...">`)
- Imports at top of `<script setup>` block
- Minimize inline styles; prefer CSS files (see `App.css` reference pattern)

### ESLint & Prettier
- ESLint config uses flat format with Vue plugin (`eslint-plugin-vue`)
- Prettier integrated via `@vue/eslint-config-prettier/skip-formatting`
- Run `npm run lint` before committing; it auto-fixes most issues

## Common Additions When Extending

### Adding a New Component
1. Create `src/components/MyComponent.vue` with `<script setup>`
2. Import `ref`/`reactive`/`computed` from `vue` as needed
3. Use lifecycle hooks: `import { onMounted } from 'vue'`
4. Register globally in `src/main.js` if shared, or import in parent

### Adding Lifecycle Hooks
- Available: `onBeforeMount`, `onMounted`, `onBeforeUpdate`, `onUpdated`, etc.
- Call at top level of `<script setup>`: `onMounted(() => console.log('ready'))`
- See `LifeHooks.vue` for complete example

### Working with Lists
- Always provide `:key` binding (not index alone for mutating lists)
- Use `v-for="(item, index) in array"` or `v-for="item in array"`
- Computed properties filter/sort lists safely (no direct mutation)

## Browser & Tooling Setup
- **Target**: Chromium-based browsers; Firefox supported
- **DevTools**: Vue.js devtools extension recommended
- **IDE**: VS Code + Vue (Official) extension (`Vue.volar`)
- **Build tool**: Vite (fast, modern, ES modules)

## Notes on Project Purpose
This is primarily an **educational repository** for teaching Vue 3 fundamentals—not a production application. Components are deliberately simple and focused on individual concepts (e.g., `ReactiveExamples.vue` demonstrates `ref` vs `reactive`). Maintain this clarity in new examples.
