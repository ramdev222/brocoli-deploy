import React from 'react';
import './Tab2.css';
//import Sentient from '../components/Sentientcall';
import { cartOutline, scanSharp } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonFab, IonFabButton, IonIcon, IonGrid,
         IonCol, IonImg, IonList, IonLabel, IonButton } from '@ionic/react';

import { usePhotoGallery } from '../hooks/usePhotoGallery';

export const Tab1: React.FC = () => {
   const { photos, takePhoto } = usePhotoGallery();
  return (
<IonPage>
  <IonHeader>
    <IonToolbar color="success">
      <IonTitle>Brocoli</IonTitle>
    </IonToolbar>
  </IonHeader>
 <IonContent>
  <IonFab vertical="bottom" horizontal="center" slot="fixed">
    <IonFabButton onClick={() => takePhoto()} color="success">
      <IonIcon icon={scanSharp}></IonIcon>
    </IonFabButton>
  </IonFab>
  <IonGrid>
    <IonList>
      {photos.map((photo, index) => (
        <IonCol size="6" key={index}>
          <IonImg src={photo.webviewPath} />
          <IonLabel>( Item name, Price, under const... )</IonLabel>
          <IonButton><IonIcon icon={cartOutline}></IonIcon></IonButton>
        </IonCol>
      ))}
    </IonList>
  </IonGrid>
  </IonContent> 
</IonPage>
  );
};


export default Tab1;