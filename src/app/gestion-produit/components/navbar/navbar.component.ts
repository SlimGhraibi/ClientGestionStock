import { Router } from '@angular/router';
import { AppService } from './../../authservice/app.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() value: EventEmitter<Boolean> = new EventEmitter();
  showHideSidebar: Boolean = false;

  constructor(private authservice: AppService,
              private router: Router ) { }

  ngOnInit() {
  }

  afficherSideBar() {
    this.showHideSidebar = !this.showHideSidebar;
    this.value.emit(this.showHideSidebar);
  }

  logout() {
    this.authservice.isAuthenticated = false;
    this.router.navigateByUrl('/login');
    console.log('user log out !');
  }

}
