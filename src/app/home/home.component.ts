import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private mainService: MainService) { }

  sendView(email) {
    this.mainService.sendSurveyView(email, 'view_survey_rrhh', '');
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe( ({ email }) => {
      email ? window.sessionStorage.setItem('email', email) : console.log('No email');
      email ? this.sendView(email) : console.log('No email');
    });
  }
}
