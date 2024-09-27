<script lang="ts">
	export let homeserver = 'matrix.org';
</script>

<ion-header translucent>
	<ion-toolbar>
		<ion-buttons slot="start">
			<ion-back-button default-href="/welcome" />
		</ion-buttons>
		<ion-title>Sign in</ion-title>
	</ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
	<ion-card>
		<ion-card-header>
			<ion-card-title>Homeserver</ion-card-title>
			<ion-card-subtitle>Where is your account hosted?</ion-card-subtitle>
		</ion-card-header>
		<ion-card-content>
			<ion-input label="Homeserver Address" label-placement="floating" value={homeserver}>
			</ion-input></ion-card-content
		>
	</ion-card>
</ion-content>
