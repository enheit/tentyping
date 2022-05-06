import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
 
function deserializePackageJson() {
	const file = fileURLToPath(new URL('package.json', import.meta.url));
	const json = readFileSync(file, 'utf8');
	const packageJson = JSON.parse(json);

	return packageJson
}

const packageJson = deserializePackageJson()

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			define: {
				PACKAGE_JSON: packageJson
			}
		}
	}
};

export default config;