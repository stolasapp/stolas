import { describe, it, expect } from 'vitest';
import { _private as i18n } from './i18n';

describe('translate', () => {
	it('can load static translations', async () => {
		const text = await i18n.translate(i18n.testLocale, '_test.static', {});
		expect(text).toBe('static');
	});
	it('can fill variables', async () => {
		const text = await i18n.translate(i18n.testLocale, '_test.vars', {
			greeting: 'Hello',
			name: 'Stolas',
			unused: 'foobar'
		});
		expect(text).toBe('Hello, Stolas!');
	});
	it('can fill all instances of the same variable', async () => {
		const text = await i18n.translate(i18n.testLocale, '_test.vars.same', {
			repeat: 'bang'
		});
		expect(text).toBe('bang-bang');
	});
});
