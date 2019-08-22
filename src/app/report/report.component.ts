import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  constructor(private mainService: MainService) {}
  PeopleSurveyed: number;
  arr_responses: any = [];
  frst_responses: any = [];

  ngOnInit() {
    this.mainService.getPeopleSurved().then(res => (this.PeopleSurveyed = res));
    this.arrOfQuestions();
  }

  arrOfQuestions() {
    const arr_responses = [];
    for (let i = 1; i <= 16; i++) {
      const param = 'res_' + i;
      this.mainService.getAnswer(param)
        .then((res: []) => arr_responses.push(res));
    }
    this.arr_responses = arr_responses;
  }

  arrOfFrstQes() {
    const NO_OPTS = 7;
    let responses = this.arr_responses[0];
    responses = responses.map(n => parseInt(n, 10));
    // console.log(responses);
    const LENGTH = responses.length;
    const PERCS = [];

    for (let i = 1; i <= NO_OPTS; i++) {
      const res = responses.filter(n => n === i).length;
      // console.log(res);
      const val = (res * 100 / LENGTH).toFixed(2);
      PERCS.push(val);
    }
    console.log(PERCS);
    this.frst_responses = PERCS;
  }
}
