import React from 'react';
import { IonBackButton, IonMenuButton } from '@ionic/react';
import { IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, IonMenuToggle } from '@ionic/react';
import "../theme/basic.css"

import MenuBarContents from "./MenuBarContents";
function MenuBar() {
	return (
		<>
			<IonMenu contentId="main-content" slot='end'>
				<IonHeader>
					<IonToolbar>
          <IonMenuToggle>
              <IonButtons>
                  <IonBackButton defaultHref='#'></IonBackButton>
              </IonButtons>
          </IonMenuToggle>
					</IonToolbar>
				</IonHeader>
				<IonContent className="ion-padding">
          <MenuBarContents />
				</IonContent>
			</IonMenu>
			<IonPage id="main-content">
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonMenuButton></IonMenuButton>
						</IonButtons>
						<IonTitle>MVCS</IonTitle>
					</IonToolbar>
				</IonHeader>
			</IonPage>
		</>
	);
}

export default MenuBar;
