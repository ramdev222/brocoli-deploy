import { IonPopover, IonItem, IonList, IonButton, IonIcon } from '@ionic/react';
import { qrCode } from 'ionicons/icons';
import React, { useState } from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

export const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [popoverState, setShowPopover] = useState({showPopover: false, event: undefined});

  return (
    <div className="container">
      <IonList>
        <IonItem>
          <IonPopover 
            cssClass = 'popup-custom'
            event = {popoverState.event}
            isOpen = {popoverState.showPopover}
            onDidDismiss = {() => setShowPopover ( {showPopover: false, event: undefined} )}
            >
              <p>This was your receipt! SCAN BELOW</p> <IonIcon icon={qrCode} className = 'iconreceipt'></IonIcon>
            </IonPopover>
          <IonButton onClick = {
            (e: any) => {
              e.persist();
              setShowPopover({ showPopover: true, event: e })
            }
          }>
            September 17, 2020
            
          </IonButton>
        </IonItem>
      </IonList>
    </div>
  );
};

export default ExploreContainer;