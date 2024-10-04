import { useEffect } from 'react';

export function useTitle(title: string) {
	useEffect(() => {
		const previous = document.title;
		document.title = `${title} — Stolas`;
		return () => {
			document.title = previous;
		};
	});
}
