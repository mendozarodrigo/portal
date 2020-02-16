import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PublicacionInterface } from '../models/publicacion';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private afs: AngularFirestore) { }
  private publicacionsCollection: AngularFirestoreCollection <PublicacionInterface >;
  private publicacions: Observable<PublicacionInterface[]>;
  private noticias: Observable<PublicacionInterface[]>;
  private publicacionDoc: AngularFirestoreDocument<PublicacionInterface>;
  private publicacion: Observable<PublicacionInterface>;
  public selectedPublicacion: PublicacionInterface = {
    id: null
  };

  getPublicacions() {
    this.publicacionsCollection = this.afs.collection<PublicacionInterface>('publicacions', ref => ref.orderBy('fecha','desc'));
    return this.publicacions = this.publicacionsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PublicacionInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  getNotas() {
    this.publicacionsCollection = this.afs.collection<PublicacionInterface>('publicacions', ref => ref.orderBy('fecha','desc'));
    return this.publicacions = this.publicacionsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PublicacionInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getAllNews() {
    this.publicacionsCollection = this.afs.collection<PublicacionInterface>('publicacions', ref => ref.orderBy('fecha', 'desc').limit(10));
    return this.noticias = this.publicacionsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PublicacionInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
    }


  getAllPublicacionsImpor() {
    this.publicacionsCollection = this.afs.collection('publicacions', ref => ref.orderBy('fecha', 'desc').where('estado', '==', 'Importante').limit(6) );
    return this.publicacions = this.publicacionsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PublicacionInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getAllPublicacions() {
    this.publicacionsCollection = this.afs.collection('publicacions', ref => ref.orderBy('fecha', 'desc'));
    return this.publicacions = this.publicacionsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PublicacionInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getAllPrograma(idPrograma: string) {
    this.publicacionsCollection = this.afs.collection('publicacions', ref => ref.where('programa', '==', idPrograma).orderBy('fecha','desc')) ;
    return this.publicacions = this.publicacionsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PublicacionInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }




  getOnePublicacion(idPublicacion: string) {
    this.publicacionDoc = this.afs.doc<PublicacionInterface>(`publicacions/${idPublicacion}`);
    return this.publicacion = this.publicacionDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as PublicacionInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addPublicacion(publicacion: PublicacionInterface): void {
//    alert('adsd servicio')
    this.publicacionsCollection.add(publicacion);
  }
  updatePublicacion(publicacion: PublicacionInterface): void {
    let idPublicacion = publicacion.id;
    this.publicacionDoc = this.afs.doc<PublicacionInterface>(`publicacions/${idPublicacion}`);
    this.publicacionDoc.update(publicacion);
  }
  deletePublicacion(idPublicacion: string): void {
    this.publicacionDoc = this.afs.doc<PublicacionInterface>(`publicacions/${idPublicacion}`);
    this.publicacionDoc.delete();
  }
}