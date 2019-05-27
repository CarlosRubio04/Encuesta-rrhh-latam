import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MainService } from '../services/main.service';

import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class MainComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  results: any = [];

  constructor(private _formBuilder: FormBuilder) {}

  getResults() {
    // Push de las respuestas al array
    this.results.push(
        this.firstFormGroup.value.firstCtrl, 
        this.secondFormGroup.value.secondCtrl, 
        this.thirdFormGroup.value.thirdCtrl, 
        this.fourthFormGroup.value.fourthCtrl
      )
    console.log(this.results);
    // Transformo textos a numero
    const resultsFloat = this.results.map( (i) => +i);
    console.log(resultsFloat);
    // Sumo los valores del array
    const suma = resultsFloat.reduce((vAn, vAc, ind, vec) => vAn + vAc);
    console.log(suma);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['1', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['1', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['1', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['1', Validators.required]
    });
  }
}