import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		debug: import.meta.env.DEV,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false // not needed as react escapes by default
		}
	});

export default i18n;
