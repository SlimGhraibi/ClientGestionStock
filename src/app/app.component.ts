import { AppService } from './gestion-produit/authservice/app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private appservice: AppService,
              private router: Router) { }

  ngOnInit() {
    if (!this.appservice.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/home');
    }
  }
}
