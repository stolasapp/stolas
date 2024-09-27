<script>
	import { beforeNavigate } from '$app/navigation';
	import { updated } from '$app/stores';
	import { setupIonicBase } from 'ionic-svelte';

	setupIonicBase();
	import '../theme/variables.scss';
	import 'ionic-svelte/components/all';

	// In the event the app is open during a deployment, this will force a
	// reload on the next navigation (poll interval via svelte.config.js).
	// see: https://kit.svelte.dev/docs/configuration#version
	beforeNavigate(({ willUnload, to }) => {
		if ($updated && !willUnload && to?.url) {
			location.href = to.url.href;
		}
	});
</script>

<ion-app>
	<slot />
</ion-app>
