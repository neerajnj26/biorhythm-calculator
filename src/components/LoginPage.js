import React, { useState } from 'react';
import LoginBox from './LoginBox';
import JoinConference from './JoinConference';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Logo from './Logo';
import Header from './Header';

const LoginPage = () => {
  const [showJoinConference, setShowJoinConference] = useState(false);

  const handleJoinConferenceClick = () => {
    setShowJoinConference(true);
  };

  const handleBackClick = () => {
    setShowJoinConference(false);
  };


  return (
    <>
      <IonGrid>
            <IonRow style={{position: "relative", top: "20px"}}>
              <IonCol size='3'>
                <Logo />
              </IonCol>
              <IonCol size='9'>
                <Header />
              </IonCol>
            </IonRow>
          </IonGrid>
        {!showJoinConference ? (
          <LoginBox onJoinConferenceClick={handleJoinConferenceClick} />
        ) : (
          <JoinConference onBackClick={handleBackClick}/>
        )}
    </>
  );
};

export default LoginPage;
