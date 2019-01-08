import { CrudService } from './../../shared/crud.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit, OnDestroy {

  @Input() data: any;
  @Input() service: CrudService;
  @Input() initItem: any; /* Produit, User...*/
  @Input() initForm: FormGroup;

  crudForm: FormGroup;
  itemSubscription: Subscription;
  operation: String = 'add';
  selectedItem: any;
  disabled: Boolean = false;

  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.createForm();
    this.init();
  }

  createForm() {
    this.initForm ? this.crudForm = this.initForm : this.crudForm = this.formBuilder.group({});
    }

  loadData(): void {
   this.itemSubscription = this.service.getAll().subscribe(
    (value) => {
      this.data = value;
      console.log('Subscription Ok !');
    },
    (error) => {
      console.log('An error occurred! : ' + error);
    },
    () => {
      console.log('Observable complete!');
    }
  );
  }

  add(): void {
     const item = this.crudForm.value;
     this.itemSubscription = this.service.add(item).subscribe(
      (value) => {
        this.init();
        this.loadData();
        console.log('Subscription Ok !');
      },
      (error) => {
        console.log('An error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  update(): void {
    this.itemSubscription = this.service.update(this.selectedItem).subscribe(
     (value) => {
       this.loadData();
       console.log('Subscription Ok !');
     },
     (error) => {
       console.log('An error occurred! : ' + error);
     },
     () => {
       console.log('Observable complete!');
     }
   );
 }

 delete(): void {
  this.itemSubscription = this.service.delete(this.selectedItem.id).subscribe(
   (value) => {
     this.loadData();
     this.selectedItem = this.initItem;
     console.log('Subscription Ok !');
   },
   (error) => {
     console.log('An error occurred! : ' + error);
   },
   () => {
     console.log('Observable complete!');
   }
 );
}

  init() {
     this.selectedItem = this.initItem;
     this.createForm();
  }

  ngOnDestroy(): void {
    if (this.itemSubscription !== undefined) {
        this.itemSubscription.unsubscribe();
    }
  }

}
