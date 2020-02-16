import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OnlineInterface } from '../models/online';

@Injectable({
  providedIn: 'root'
})
export class OnlineService {
  constructor(private afs: AngularFirestore) { }
  private onlinesCollection: AngularFirestoreCollection <OnlineInterface >;
  private onlines: Observable<OnlineInterface []>;
  private noticias: Observable<OnlineInterface[]>;
  private onlineDoc: AngularFirestoreDocument<OnlineInterface>;
  private online: Observable<OnlineInterface>;
  public selectedOnline: OnlineInterface = {
    id: null
  };

  getOnlines() {
    this.onlinesCollection = this.afs.collection<OnlineInterface>('onlines');
    return this.onlines = this.onlinesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as OnlineInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getAllNews() {
    this.onlinesCollection = this.afs.collection<OnlineInterface>('onlines');
    return this.noticias = this.onlinesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as OnlineInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
    }


  getAllOnlinesImpor() {
    this.onlinesCollection = this.afs.collection('onlines', ref => ref.where('estado', '==', 'Importante'));
    return this.onlines = this.onlinesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as OnlineInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getAllOnlines() {
    this.onlinesCollection = this.afs.collection('onlines', ref => ref.where('estado', '>', 'Borrador')) ;
    return this.onlines = this.onlinesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as OnlineInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getAllPrograma(idPrograma: string) {
    this.onlinesCollection = this.afs.collection('onlines', ref => ref.where('programa', '==', idPrograma)) ;
    return this.onlines = this.onlinesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as OnlineInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  
  getOneOnline(idOnline: string) {
    this.onlineDoc = this.afs.doc<OnlineInterface>(`onlines/${idOnline}`);
    return this.online = this.onlineDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as OnlineInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addOnline(online: OnlineInterface): void {
    this.onlinesCollection.add(online);
  }
  updateOnline(online: OnlineInterface): void {
    let idOnline = online.id;
    this.onlineDoc = this.afs.doc<OnlineInterface>(`onlines/${idOnline}`);
    this.onlineDoc.update(online);
  }
  deleteOnline(idOnline: string): void {
    this.onlineDoc = this.afs.doc<OnlineInterface>(`onlines/${idOnline}`);
    this.onlineDoc.delete();
  }
}