import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  PeopleSurveyed: number;
  constructor(private mainService: MainService) { }
  ngOnInit() {
    this.mainService.getAnswers().then( res => {
      this.PeopleSurveyed = res.length;
      console.log(this.PeopleSurveyed);
    });
  }
}
