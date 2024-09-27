<script lang="ts">
	import type { ManifestKey } from '$lib/services/i18n';
	import { t } from '$lib/services/i18n';

	/**
	 * The translation key for the page title. If unspecified, no page title
	 * will be displayed.
	 */
	export let key: ManifestKey | undefined = undefined;
	/**
	 * Any variables required to render the page title.
	 */
	export let vars: Record<string, string> | undefined = undefined;
</script>

<title>
	{#if key}
		{#await $t(key, vars)}
			<!-- pending -->
		{:then text}
			{text} —
		{/await}
	{/if}
	Stolas
</title>
