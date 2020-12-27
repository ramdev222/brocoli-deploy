import React from 'react';
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
//import { cart } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>History</IonTitle>
        </IonToolbar>
      </IonHeader>  
      <IonContent fullscreen>
        <IonHeader collapse="condense" color="success">
          <IonToolbar>
            <IonTitle size="large">History</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="History" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;