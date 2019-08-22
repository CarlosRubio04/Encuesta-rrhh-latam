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
  countryFormGroup: FormGroup;
  personalFormGroup: FormGroup;

  countries: any = [];
  defaultCuntry: any = 'CO';
  results: any = {};

  constructor(private _formBuilder: FormBuilder, private mainService: MainService) {}
  sendView(email, msg) {
    this.mainService.sendSurveyView(email, 'submit_survey_rrhh', msg);
  }
  pushAnswers() {
    // Push de las respuestas al array
    this.results = {
      res_1: this.firstFormGroup.value.firstCtrl,
      res_2: this.secondFormGroup.value.secondCtrl,
      res_3: this.thirdFormGroup.value.thirdCtrl,
      res_4: this.fourthFormGroup.value.fourthCtrl,
      res_5: this.fifthFormGroup.value.fifthCtrl,
      res_6: this.sixFormGroup.value.sixCtrl,
      res_7: this.sevenFormGroup.value.sevenCtrl,
      res_8: this.eightFormGroup.value.eigthCtrl,
      res_9: this.nineFormGroup.value.nineCtrl,
      res_10: this.tenFormGroup.value.tenCtrl,
      res_11: this.elevenFormGroup.value.elevenCtrl,
      res_12: this.twelveFormGroup.value.twelveCtrl,
      res_13: this.thirteenFormGroup.value.thirteenCtrl,
      res_14: this.fourteenFormGroup.value.fourteenCtrl,
      res_15: this.fiveteenFormGroup.value.fiveteenCtrl,
      res_16: this.sixteenFormGroup.value.sixteenCtrl,
      conuntry: this.countryFormGroup.value.countryCtrl,
      email: this.personalFormGroup.value.emailCtrl,
      comment: this.personalFormGroup.value.commentCtrl
    };

    this.mainService.addAnswer(this.results);
    this.results.email ? this.sendView(this.results.email, this.results.comment) : console.log('No email');
  }

  ngOnInit() {

    const Country = this.mainService.findCountry().subscribe( (data) => {
      console.log(data);
      this.defaultCuntry = data;
    });

    const Countries = this.mainService.getListOfCountries().subscribe((data) => {
      console.log(data);
      this.countries = data;
    });

    const emailReg = window.sessionStorage.getItem('email');

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
    this.countryFormGroup = this._formBuilder.group({
      countryCtrl: ['']
    });
    this.personalFormGroup = this._formBuilder.group({
      emailCtrl: [emailReg ? emailReg : '', Validators.email],
      commentCtrl: [''],
    });
  }
}
