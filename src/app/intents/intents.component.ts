import { Component, OnInit, Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import{  IntentService } from './intent.service';
import{ AppSetting }from '../app.setting';
import { EntityService } from '../entity/entity.service';
import {of,} from 'rxjs';
import {delay} from 'rxjs/operators';

export interface PeriodicElement {
 
  title:string;
  purpose:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-intents',
  templateUrl: './intents.component.html',
  styleUrls: ['./intents.component.css']
})
export class IntentsComponent implements OnInit {
  private subscription: Subscription;
  displayedColumns: string[] = ['title', 'purpose', 'export', 'edit','delete'];
 querylist: string[] = [];
 ureslist:string[]=[];
  dataSource :any;
  query: string;
  uresponse:string;
  myControl = new FormControl();
  options: string[]=AppSetting.entity;
  filteredOptions: Observable<string[]>;


  constructor(private intentservice:IntentService) {}


  intents=[];
  isLoading = true;

  ngOnInit() {

    of(ELEMENT_DATA).pipe(delay(2000))
     .subscribe(data => {
       this.isLoading = false;
       this.onGet();
     }, error => this.isLoading = false);


    console.log(AppSetting.entity);
   
    this.subscription = this.intentservice.intentChanged
    .subscribe(
      (m) => {
        console.log('Refresh after' + m);
        this.onGet();
      }
    );
   
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );

   
  }

    onGet()
    {
      this.intentservice.getIntents(AppSetting.workspaceID)
      .subscribe((response)=>
      {
        console.log(response);
        this.dataSource=response; 
      },
      (error)=>
      {
        console.log(error);
      });

      
    }

        addquery(data:any)
      {
        this.querylist.push(data);
        this.query=null;
      }

      saveintents()
      {
          console.log(this.intents);
      }
      requiredEntity()
      {

      }
      addUres(data:any)
      {
        this.ureslist.push(data);
        this.uresponse=null;
      }
      deletequery(id:any)
      {
          this.querylist.splice(id, 1);
      }
      deleteUres(id:any)
      {
        this.ureslist.splice(id, 1);
      }

      






 private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}

}





