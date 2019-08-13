import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private db: AngularFirestore) { }

  public addAnswer(data) {
    this.db.collection('answers').add(data)
      .then( (res) => {
        console.log(res.id);
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  public getAnswers() {
    return this.db.collection('answers').get();
  }

}
