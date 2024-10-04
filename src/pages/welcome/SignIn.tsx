import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonIcon,
	IonInput,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { useTitle } from '../../lib/title';
import React from 'react';
import { arrowForward } from 'ionicons/icons';

interface SignInProps {
	server?: string;
}

const SignIn: React.FC<SignInProps> = ({ server = 'matrix.org' }) => {
	const { t } = useTranslation();
	useTitle(t('welcome.sign_in.page.title'));
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="/welcome" />
					</IonButtons>
					<IonTitle>{t('welcome.sign_in.title')}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen class="ion-padding">
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Homeserver</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonInput label={t('welcome.sign_in.server')} labelPlacement="floating" value={server} />
						<IonButton expand="block">
							{t('welcome.sign_in.continue')}
							<IonIcon icon={arrowForward} slot="end" />
						</IonButton>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};
export default SignIn;
