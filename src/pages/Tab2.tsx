import React from 'react';
//import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { camera } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg } from '@ionic/react';

import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
   const { photos, takePhoto } = usePhotoGallery();
   
  return (
    <IonPage>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Brocoli</IonTitle>
    </IonToolbar>
  </IonHeader>
 <IonContent>
  <IonFab vertical="bottom" horizontal="center" slot="fixed">
    <IonFabButton onClick={() => takePhoto()}>
      <IonIcon icon={camera}></IonIcon>
    </IonFabButton>
  </IonFab>
  <IonGrid>
    <IonRow>
      {photos.map((photo, index) => (
        <IonCol size="6" key={index}>
          <IonImg src={photo.webviewPath} />
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
</IonContent> 
</IonPage>
  );
};

export default Tab2;
