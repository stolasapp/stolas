import { derived } from 'svelte/store';
import { persisted } from 'svelte-persisted-store';

const testLocale = 'test';

import referenceManifest from './translations/en';

/** The lookup table mapping keys to translated text */
export type Manifest = typeof referenceManifest;

/** The valid types of keys supported by the app */
export type ManifestKey = keyof Manifest;

interface Module {
	default: Manifest;
}
const manifests = import.meta.glob('./translations/*.ts') as Record<string, () => Promise<Module>>;

const _locales = Object.keys(manifests).map((key) => key.slice('./translations/'.length, -3));

/** The locales supported by the app */
export const locales = _locales.splice(_locales.indexOf(testLocale), 1);

/** The current locale of the app, defaults to `'en'`. */
export const locale = persisted('locale', 'en');

/**
 * Produces the translation of the given key in the locale, replacing any
 * template variables (denoted by `{{key}}`) in the text.
 *
 * @param locale The locale to translate to
 * @param key The key for the translated text
 * @param vars Any variables that should be replaced in the translated text
 * @returns The translated text
 */
async function translate(
	locale: string,
	key: string,
	vars: Record<string, string>
): Promise<string> {
	const manifest = (await manifests[`./translations/${locale}.ts`]()).default as Record<
		string,
		string
	>;
	let text = manifest[key];
	Object.keys(vars).map((k) => (text = text.replaceAll(`{{${k}}}`, vars[k])));
	return text;
}

/**
 * {@link Store} that produces the translation for the given `key` and `vars` in the
 * current {@link locale}.
 *
 * @param {ManifestKey} key The key for the translated text
 * @param {Record<string,string>} [vars={}] Any variables that should be replaced in the translated text
 */
export const t = derived(
	locale,
	($locale) =>
		(key: ManifestKey, vars: Record<string, string> = {}) =>
			translate($locale, key, vars)
);

export const _private = {
	testLocale,
	translate
} as const;
