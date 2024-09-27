<script lang="ts">
	// @ts-expect-error ionic-svelte type declarations won't load
	import IonNav from 'ionic-svelte/components/IonNav.svelte';
	import Start from '$lib/components/welcome/start.svelte';
	import Title from '$lib/components/title.svelte';
</script>

<svelte:head><Title key="welcome.title" /></svelte:head>

<IonNav root={Start} animation={undefined} rootParams={undefined} swipeGesture={undefined} />
