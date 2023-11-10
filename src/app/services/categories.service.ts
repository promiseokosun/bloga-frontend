import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  collectionName = 'categories';
  constructor(private fs: AngularFirestore) { }

  getAll(){
    return this.fs.collection(this.collectionName).snapshotChanges().pipe(
      map(categories => {
        return categories.map(category => {
          const data = category.payload.doc.data();
          const id = category.payload.doc.id;
          return {id, data};
        })
      })
    )
  }

}
