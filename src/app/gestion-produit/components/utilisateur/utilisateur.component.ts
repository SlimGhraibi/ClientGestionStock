import { UserService } from './../../services/UserService';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataModel } from '../../models/data.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  users: User[];
  user: User = new User();
  usersForm: FormGroup;
  title: String = 'Liste des utilisateurs';
  usersModel: DataModel[];

  constructor(private formBuilder: FormBuilder,
              public  usersService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.users = this.route.snapshot.data.users;
    console.log(this.users);
    this.usersForm = this.formBuilder.group({
      id : [''],
      username : [''],
      enable: ['']
     });
     this.usersModel = [
                        new DataModel('id', 'ID', 'number', true, []),
                        new DataModel('username', 'Nom utilisateur', 'string', false, []),
                        new DataModel('enable', 'Actif', 'boolean', true, [])
                        ];
  }


}
