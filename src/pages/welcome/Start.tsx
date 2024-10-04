import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
	IonIcon,
	IonPage
} from '@ionic/react';
import { logIn, add } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { useTitle } from '../../lib/title';
import React from 'react';

const Start: React.FC = () => {
	const { t } = useTranslation();
	useTitle(t('welcome.start.page.title'));
	return (
		<IonPage>
			<IonContent fullscreen class="ion-padding">
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>{t('welcome.start.title')}</IonCardTitle>
						<IonCardSubtitle>{t('welcome.start.subtitle')}</IonCardSubtitle>
					</IonCardHeader>
					<IonCardContent>
						<IonButton expand="block" routerLink="/welcome/sign-in">
							<IonIcon icon={logIn} slot="start" />
							{t('welcome.start.sign_in')}
						</IonButton>
						<IonButton expand="block" color="secondary">
							<IonIcon icon={add} slot="start" />
							{t('welcome.start.create_account')}
						</IonButton>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};
export default Start;
