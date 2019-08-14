import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  AllAnswers: any = [];
  PeopleSurveyed: number;
  constructor(private mainService: MainService) { }

  getFirst(data) {
    const opt_01 = data.filter( res => res.res_01 === '1').length;
    const opt_02 = data.filter( res => res.res_01 === '2').length;
    const opt_03 = data.filter( res => res.res_01 === '3').length;
    const opt_04 = data.filter( res => res.res_01 === '4').length;
    const opt_05 = data.filter( res => res.res_01 === '5').length;
    const opt_06 = data.filter( res => res.res_01 === '6').length;

    return [opt_01, opt_02, opt_03, opt_04, opt_05, opt_06];
  }

  getSecond(data) {
    const opt_01 = data.filter( res => res.res_02 === '1').length;
    const opt_02 = data.filter( res => res.res_02 === '2').length;
    const opt_03 = data.filter( res => res.res_02 === '3').length;
    const opt_04 = data.filter( res => res.res_02 === '4').length;
    const opt_05 = data.filter( res => res.res_02 === '5').length;
    const opt_06 = data.filter( res => res.res_02 === '6').length;
    const opt_07 = data.filter( res => res.res_02 === '7').length;
    const opt_08 = data.filter( res => res.res_02 === '8').length;

    return [opt_01, opt_02, opt_03, opt_04, opt_05, opt_06, opt_07, opt_08];
  }
  ngOnInit() {
    this.mainService.getAnswers().valueChanges().subscribe( res => {
      this.AllAnswers = res;
      this.PeopleSurveyed = res.length;
      console.log(this.AllAnswers);
      console.log(this.PeopleSurveyed);
      console.log(this.getFirst(res), this.getSecond(res));
    });
  }

}
