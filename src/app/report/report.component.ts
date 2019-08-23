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
  Arr_responses: any = [];
  Frst_responses: any = [];
  Frst_labels: any = [
    'RRHH',
    'Administración',
    'Contabilidad y finanzas',
    'Dirección',
    'Ventas',
    'Mercadeo',
    'Otro'
  ];
  Scnd_responses: any = [];
  Scnd_labels: any = [
    'Director general',
    'Presidente o vicepresidente',
    'Director de RRHH',
    'Director de otro departamento',
    'Supervisor',
    'Asistente',
    'Analista',
    'Otro'
  ];

  ngOnInit() {
    this.mainService.getPeopleSurved().then(res => (this.PeopleSurveyed = res));
    this.ArrOfQuestions()
      .then( res => {
        this.Arr_responses = res;
      });
  }
  viewReports() {
    this.ArrOfFrstQues();
    this.ArrOfScndQues();
  }
  ArrOfQuestions() {
    return new Promise<any>((resolve, reject) => {
      const arr_responses = [];
      for (let i = 16; i >= 1; i--) {
        const param = 'res_' + i;
        this.mainService
          .getAnswer(param)
          .then((res: []) => arr_responses.push(res));
      }
      // console.log(arr_responses);
      resolve(arr_responses);
    });
  }

  ArrOfFrstQues() {
    const NO_OPTS = 7;
    let responses = this.Arr_responses[0];
    responses = responses.map(n => parseInt(n, 10));
    console.log(responses);
    const LENGTH = responses.length;
    const PERCS = [];

    for (let i = 1; i <= NO_OPTS; i++) {
      const res = responses.filter(n => n === i).length;
      // console.log(res);
      const val = ((res * 100) / LENGTH).toFixed(2);
      PERCS.push(val);
    }
    console.log(PERCS);
    this.Frst_responses = PERCS;
  }

  ArrOfScndQues() {
    const NO_OPTS = 8;
    let responses = this.Arr_responses[1];
    responses = responses.map(n => parseInt(n, 10));
    // console.log(responses);
    const LENGTH = responses.length;
    const PERCS = [];

    for (let i = 1; i <= NO_OPTS; i++) {
      const res = responses.filter(n => n === i).length;
      // console.log(res);
      const val = ((res * 100) / LENGTH).toFixed(2);
      PERCS.push(val);
    }
    console.log(PERCS);
    this.Scnd_responses = PERCS;
  }
}
