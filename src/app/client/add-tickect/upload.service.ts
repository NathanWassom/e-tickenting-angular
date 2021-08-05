import { Injectable} from '@angular/core';
import { Upload } from './upload';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class UploadService{
  constructor(private db: AngularFireDatabase) { }

  pushUpload(upload: Upload)
  {
    let storageRef = firebase.storage().ref;
    let uploadTask = storageRef.Child('uploads/${upload.file.name}').put(upload.file);


    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: any) => {
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error: any) => {
        console.log(error)
      },
      () => {
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file?.name
        this.saveFileData(upload)
      }
    );
  }

  private saveFileDta(upload: Upload) {
    this.db.list('uploads/').push(upload)
  }
}
