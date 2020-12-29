import { useState, useEffect } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
//import { useStorage } from '@ionic/react-hooks/storage';
//import { isPlatform } from '@ionic/react';
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";


export function usePhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const { getPhoto } = useCamera();

  const takePhoto = async () => {
  const cameraPhoto = await getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });

  const fileName = new Date().getTime() + '.jpeg';
  const savedFileImage = await savePicture(cameraPhoto, fileName);
  const newPhotos = [savedFileImage, ...photos];
  setPhotos(newPhotos);
};

  const { deleteFile, getUri, readFile, writeFile } = useFilesystem();

  const savePicture = async (photo: CameraPhoto, fileName: string): Promise<Photo> => {
  const base64Data = await base64FromPath(photo.webPath!);
  const savedFile = await writeFile({
    path: fileName,
    data: base64Data,
    directory: FilesystemDirectory.Data
  });

  /*
//DATA to path sentient.io ABOVE code fetch SEEMS TO BE NOT WORKING

const xhr = new XMLHttpRequest();
//Please disable this when testing in local
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://apis.sentient.io/microservices/cv/objectdetection/v0.1/getpredictions");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-api-key", "F6B5166BDF9E4F6F8FFE");

xhr.send(data);*/

  // Use webPath to display the new image instead of base64 since it's
  // already loaded into memory
  return {
    filepath: fileName,
    webviewPath: photo.webPath
  };
};
  
  return {
  photos,
  takePhoto
};
}

export interface Photo {
  filepath: string;
  webviewPath?: string;
}