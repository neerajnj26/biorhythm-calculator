import React, { useState } from 'react';
import "../theme/basic.css"
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonInput, IonItem, IonLabel, IonNote } from '@ionic/react';

const LoginBox = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => {
        console.log("User Tried to Login with username: "+username+" and Password: "+password)
    }

    return (
        <IonCard class="login-box ion-text-center">
            <IonCardHeader>
                <IonCardTitle className='login-title'>Login</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonItem>
                    <IonLabel position="stacked">Web Account</IonLabel>
                    <IonInput type="text" value={username} onIonChange={(event)=> setUsername(event.detail.value)}></IonInput>
                    <IonNote slot='helper'>Enter Valid Username</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Password</IonLabel>
                    <IonInput type="password" value={password} onIonChange={(event)=> setPassword(event.detail.value)}></IonInput>
                    <IonNote slot='helper'>Enter Your Password</IonNote>

                </IonItem>
                <IonButton className='login-button' onClick={handleClick} expand="full">Login</IonButton>
            </IonCardContent>
        </IonCard>

    );
}

export default LoginBox;