import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import {IonApp, IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import "@ionic/react/css/core.css"
import LoginPage from './components/LoginPage';
import DashboardPage from './components/Dashboard/DashboardPage';

setupIonicReact();


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
      </Routes>
    </Router>
  );
};

export default App;


/* <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MVCS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <LoginPage />
          
      </IonContent>
    </IonApp> */