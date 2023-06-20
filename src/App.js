import React from 'react';
import {IonApp, setupIonicReact } from '@ionic/react';
import "@ionic/react/css/core.css"
import LoginBox from './components/LoginBox';
import MenuBar from './components/MenuBar';
import Logo from './components/Logo';
import Header from './components/Header';

setupIonicReact();


const App = () => {
  return (
    <IonApp>
        <MenuBar />
        <Header />
        <Logo />
        <LoginBox />
    </IonApp>
  );
};

export default App;
