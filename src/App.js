import React from 'react';
import {IonApp, IonContent, IonHeader, setupIonicReact } from '@ionic/react';
import "@ionic/react/css/core.css"
import LoginBox from './components/LoginBox';
import MenuBar from './components/MenuBar';
import Logo from './components/Logo';

setupIonicReact();


const App = () => {
  return (
    <IonApp>
        <MenuBar />
        <Logo />
        <LoginBox />
      <IonContent>

      </IonContent>
    </IonApp>
  );
};

export default App;
