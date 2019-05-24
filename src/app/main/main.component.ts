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

  constructor(private _formBuilder: FormBuilder) {}

  getResults() {
    console.log(this.firstFormGroup.value);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['1', Validators.required],
      secondCtrl: ['1', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['1', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['1', Validators.required]
    });
  }
}