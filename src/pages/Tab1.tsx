import React, {Component} from 'react';
//import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { cartOutline, scanSharp } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonFab, IonFabButton, IonIcon, IonGrid,
         IonCol, IonImg, IonList, IonLabel, IonButton } from '@ionic/react';

import { usePhotoGallery } from '../hooks/usePhotoGallery';
//import { render } from '@testing-library/react';

/*class Sentient extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
    
  }
}*/

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