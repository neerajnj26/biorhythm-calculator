import React from 'react';
import { IonBackButton, IonButtons, IonItem, IonList, IonMenuButton } from '@ionic/react';
import { IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, IonMenuToggle } from '@ionic/react';


const MenuBar = () => {
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
          <IonList>
            <IonItem>
                Home
            </IonItem>
            <IonItem>
                About
            </IonItem>
            <IonItem>
                Download
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
                <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>MVCS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          
        </IonContent>
      </IonPage>
    </>
  );
}
export default MenuBar;