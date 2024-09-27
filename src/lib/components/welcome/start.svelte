<script lang="ts">
	import * as ionicons from 'ionicons/icons';
	import { navController } from 'ionic-svelte';
	import SignIn from '$lib/components/welcome/signin.svelte';
</script>

<ion-content fullscreen scroll-y={false} class="ion-padding">
	<ion-card>
		<ion-card-header>
			<ion-card-title>Welcome to Stolas!</ion-card-title>
			<ion-card-subtitle>A Mobile-First Matrix Client</ion-card-subtitle>
		</ion-card-header>
		<ion-card-content>
			<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
			<ion-button
				expand="block"
				on:click={() => {
					navController.push(SignIn, {});
				}}
			>
				<ion-icon slot="start" icon={ionicons.logIn} aria-hidden="true" />
				Sign in
			</ion-button>
			<ion-button expand="block" color="secondary">
				<ion-icon slot="start" icon={ionicons.add} aria-hidden="true" />
				Create account
			</ion-button>
		</ion-card-content>
	</ion-card>
</ion-content>
