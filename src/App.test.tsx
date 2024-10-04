import { render } from '@testing-library/react';
import WrappedApp from './App';

test('renders without crashing', () => {
	const { baseElement } = render(<WrappedApp />);
	expect(baseElement).toBeDefined();
});
