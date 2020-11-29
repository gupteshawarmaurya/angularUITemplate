import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from '../work-space/work-space.service'
import { EntityService } from '../entity/entity.service';
import { IntentService } from '../intents/intent.service';
import { Subscription } from 'rxjs/Subscription';
import { AppSetting } from '../app.setting';
import { from } from 'rxjs';

export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private subscription: Subscription;

  data = [];
  entitylist = [];
  selected = '';
  constructor(private workspaceservice: WorkspaceService, private intentservice: IntentService, private entityservice: EntityService) { }

  ngOnInit() {


    this.workspaceservice.getWorkspace()
      .subscribe(
        (users: any) => {
          console.log(users);
          this.data = users;
          for (let p of this.data) {
            if (p.workspaceID == '1000') {
              AppSetting.workspaceID = p.workspaceID;
              AppSetting.WorkSpace = p.title;
            }
          }
          (error: any) => console.log(error)
        }
      );
  }

  getfunction() {
    alert('hello');
  }
  workspaceSelect(WorkSTitle: string, workSId: string) {
    // alert(workSId+'helo'+WorkSTitle);
    AppSetting.workspaceID = workSId;
    this.intentservice.intentChanged.next();
    this.entityservice.entityChanged.next();
  }

}
