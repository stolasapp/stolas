import React from 'react';
import { createRoot } from 'react-dom/client';

import './lib/i18n';
import WrappedApp from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
	<React.StrictMode>
		<WrappedApp />
	</React.StrictMode>
);
