import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private db: AngularFireDatabase) { }

  public addAnswer(data) {
    const ID = Date.now();
    this.db.database.ref('answers/' + ID).set(data)
      .then( (res) => {
        console.log(res);
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  public getAnswers() {
    return this.db.list('answers');
  }

}
