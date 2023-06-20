import React from "react";
import {
	IonList,
	IonItem,
	IonIcon,
	IonLabel,
	IonMenuToggle,
} from "@ionic/react";
import { home, download, information } from "ionicons/icons";

const MenuBarContents = () => {
	return (
        <IonList>
            <IonMenuToggle autoHide={true}>
                <IonItem button>
                    <IonIcon icon={home} slot="start" />
                    <IonLabel>Home</IonLabel>
                </IonItem>
            </IonMenuToggle>

            <IonMenuToggle autoHide={false}>
                <IonItem button>
                    <IonIcon icon={download} slot="start" />
                    <IonLabel>Download</IonLabel>
                </IonItem>
            </IonMenuToggle>

            <IonMenuToggle autoHide={false}>
                <IonItem button>
                    <IonIcon icon={information} slot="start" />
                    <IonLabel>About</IonLabel>
                </IonItem>
            </IonMenuToggle>
        </IonList>
	);
};

export default MenuBarContents;

