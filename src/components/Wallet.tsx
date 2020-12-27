import { IonIcon, IonLabel } from '@ionic/react';
import { walletOutline } from 'ionicons/icons';
import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const Wallet: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">

          <IonLabel>UNDER CONSTRUCTION...</IonLabel>
          <br></br>
          <IonIcon icon={walletOutline}></IonIcon>
    </div>
  );
};

export default Wallet;