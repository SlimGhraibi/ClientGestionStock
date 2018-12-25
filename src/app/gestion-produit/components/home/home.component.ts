import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'app';
  showHideSidebar: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onShowSidebarChange(event) {
    this.showHideSidebar = event;
  }
}
