import { Router } from '@angular/router';
import { AppService } from './../../authservice/app.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  credentials = {
     username: '',
     password: ''
  };
  constructor(private fb: FormBuilder,
              private appservice: AppService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  login() {
    this.appservice.authenticate(this.credentials, () => {
    this.router.navigateByUrl('/home/(contentOutlet:dashboard)');
    });
  }
}
