import { Component, OnInit } from '@angular/core';
import { EntityService } from './entity.service';
import { AppSetting } from '../app.setting';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import {of,} from 'rxjs';
import {delay} from 'rxjs/operators';
export interface PeriodicElement {
  entityType: string;

}

const ELEMENT_DATA: PeriodicElement[] = [

];


@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {
  private subscription: Subscription;
  displayedColumns: string[] = ['entitytype', 'export', 'edit', 'delete'];
  dataSource: any;
  entitylist = [];


  constructor(private entityservice: EntityService) { }
  isLoading = true;

  ngOnInit() {

    of(ELEMENT_DATA).pipe(delay(2000))
     .subscribe(data => {
       this.isLoading = false;
       this.onGet();
     }, error => this.isLoading = false);

    
    this.subscription = this.entityservice.entityChanged
      .subscribe(
        (m) => {
          console.log('Refresh after' + m);
          this.onGet();
        }
      );
  }

  onGet() {
    this.entityservice.getEntity(AppSetting.workspaceID)
      .subscribe((response) => {
        console.log(response);
        this.dataSource = response;

        this.entityservice.getEntity(AppSetting.workspaceID)
          .subscribe(
            (entity: any) => {

              for (let q of entity) {
                this.entitylist.push(q.entityType);
              }

            },
            (error: any) => console.log(error)
          );

      },
        (error) => {
          console.log(error);
        }
      );

    AppSetting.entity = this.entitylist;
  }




  addEntity() {
    alert('Add entity');
  }

}
