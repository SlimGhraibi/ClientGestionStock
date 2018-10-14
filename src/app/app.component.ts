import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showHideSidebar: Boolean = false;

  onShowSidebarChange(event) {
    this.showHideSidebar = event;
  }
}
