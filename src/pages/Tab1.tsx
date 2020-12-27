import React from 'react';
//import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { camera } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonFab, IonFabButton, IonIcon, IonGrid,
         IonCol, IonImg, IonList } from '@ionic/react';

import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
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
      <IonIcon icon={camera}></IonIcon>
    </IonFabButton>
  </IonFab>
  <IonGrid>
    <IonList>
      {photos.map((photo, index) => (
        <IonCol size="6" key={index}>
          <IonImg src={photo.webviewPath} />
        </IonCol>
      ))}
    </IonList>
  </IonGrid>
  </IonContent> 
</IonPage>
  );
};

export default Tab2;

