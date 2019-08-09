import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class MainComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixFormGroup: FormGroup;
  sevenFormGroup: FormGroup;
  eightFormGroup: FormGroup;
  nineFormGroup: FormGroup;
  tenFormGroup: FormGroup;
  elevenFormGroup: FormGroup;
  twelveFormGroup: FormGroup;
  thirteenFormGroup: FormGroup;
  fourteenFormGroup: FormGroup;
  fiveteenFormGroup: FormGroup;
  sixteenFormGroup: FormGroup;

  results: any = [];

  constructor(private _formBuilder: FormBuilder) {}

  getResults() {
    // Push de las respuestas al array
    this.results.push(
      this.firstFormGroup.value.firstCtrl,
      this.secondFormGroup.value.secondCtrl,
      this.thirdFormGroup.value.thirdCtrl,
      this.fourthFormGroup.value.fourthCtrl,
      this.fifthFormGroup.value.fifthCtrl,
      this.sixFormGroup.value.sixCtrl,
      this.sevenFormGroup.value.sevenCtrl,
      this.eightFormGroup.value.eigthCtrl,
      this.nineFormGroup.value.nineCtrl,
      this.tenFormGroup.value.tenCtrl,
      this.elevenFormGroup.value.elevenCtrl,
      this.twelveFormGroup.value.twelveCtrl,
      this.thirteenFormGroup.value.thirteenCtrl,
      this.fourteenFormGroup.value.fourteenCtrl,
      this.fiveteenFormGroup.value.fiveteenCtrl,
      this.sixteenFormGroup.value.sixteenCtrl
    );
    console.log(this.results);
    // Transformo textos a numero
    const resultsFloat = this.results.map(i => +i);
    console.log(resultsFloat);
    // Sumo los valores del array
    const suma = resultsFloat.reduce((vAn, vAc, ind, vec) => vAn + vAc);
    console.log(suma);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixFormGroup = this._formBuilder.group({
      sixCtrl: ['', Validators.required]
    });
    this.sevenFormGroup = this._formBuilder.group({
      sevenCtrl: ['', Validators.required]
    });
    this.eightFormGroup = this._formBuilder.group({
      eigthCtrl: ['', Validators.required]
    });
    this.nineFormGroup = this._formBuilder.group({
      nineCtrl: ['', Validators.required]
    });
    this.tenFormGroup = this._formBuilder.group({
      tenCtrl: ['', Validators.required]
    });
    this.elevenFormGroup = this._formBuilder.group({
      elevenCtrl: ['', Validators.required]
    });
    this.twelveFormGroup = this._formBuilder.group({
      twelveCtrl: ['', Validators.required]
    });
    this.thirteenFormGroup = this._formBuilder.group({
      thirteenCtrl: ['', Validators.required]
    });
    this.fourteenFormGroup = this._formBuilder.group({
      fourteenCtrl: ['', Validators.required]
    });
    this.fiveteenFormGroup = this._formBuilder.group({
      fiveteenCtrl: ['', Validators.required]
    });
    this.sixteenFormGroup = this._formBuilder.group({
      sixteenCtrl: ['', Validators.required]
    });
  }
}
