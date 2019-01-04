import { Principal } from './../../models/principal.model';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { PrincipalState } from '../../shared/principal.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  private principal: Principal;

  constructor(private store: Store<PrincipalState>) { }

  ngOnInit() {
    this.store.select('principal').subscribe(principal => {
        this.principal = principal;
    });
  }

  hasRoleUser() {
  let hasRole: Boolean = false;
  this.principal.authorities.forEach(authoritie => {
    if (authoritie.authority === 'ROLE_USER') {
      hasRole = true;
    }
  });
  return hasRole;
  }

  hasRoleAdmin() {
  let hasRole: Boolean = false;
  this.principal.authorities.forEach(authoritie => {
    if (authoritie.authority === 'ROLE_ADMIN') {
      hasRole = true;
    }
  });
  return hasRole;
  }

}
