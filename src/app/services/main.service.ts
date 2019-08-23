import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  API_IP_URL: string = 'https://api.ipdata.co/?api-key=';
  API_IP_KEY: string = '7836a4acdb465320d4436d3ce4bfdd37f004278fd8a2aabb0c6cce9d';
  API_COUNTRIES: string = 'https://restcountries.eu/rest/v2';

  RD_SERVICE_URL: string = 'https://www.acsendo.com/encuesta/rd_service/survey.php';

  constructor(private db: AngularFireDatabase, private http: HttpClient, private router: Router) { }

  public addAnswer(data) {
    const ID = Date.now();
    this.db.database.ref('answers/' + ID).set(data)
      .then( (res) => {
        this.router.navigate(['/results']);
        console.log(res);
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  public getAnswers() {
    return new Promise<any>((resolve, reject) => {
      this.db.list('answers').valueChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        });
    });
  }

  public getAnswer(answer) {
    return new Promise<any>((resolve, reject) => {
      this.getAnswers()
        .then( res => {
          const arrAnswer = res.map((r) => r[answer]);
          resolve(arrAnswer);
        });
    });
  }

  public getPeopleSurved() {
    return new Promise<any>((resolve, reject) => {
      this.getAnswers()
        .then( res => {
          const length = res.length;
          console.log(res);
          resolve(length);
        });
    });
  }

  public findCountry () {
    return this.http.get(this.API_IP_URL + this.API_IP_KEY);
  }

  public getListOfCountries () {
    return this.http.get(`${this.API_COUNTRIES}/lang/es`);
  }

  public sendSurveyView(email, id, message) {
    this.http.get(`${this.RD_SERVICE_URL}?email=${email}&id=${id}&msg=${message}`)
      .subscribe( res => {
        console.log(res);
      });
  }
}
