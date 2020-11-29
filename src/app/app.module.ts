import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./core/material.module";
import { IntentsComponent } from './intents/intents.component';
import { EntityComponent } from './entity/entity.component';
import { LearningComponent } from './learning/learning.component';
import { TryitComponent } from './tryit/tryit.component';
import { UserComponent } from './user/user.component';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';
import { WorkSpaceComponent } from './work-space/work-space.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import{IntentService} from './intents/intent.service';
import{EntityService} from './entity/entity.service';
import{WorkspaceService}from './work-space/work-space.service';
import{LearningService}from './learning/learning.service';
//import { HttpModule } from '@angular/http';



const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home Component' } },
  { path: 'intents', component:  IntentsComponent, data: { title: 'Intents Component' } },
  { path: 'workspace', component:  WorkSpaceComponent, data: { title: 'WorkSpace Component' } },
  { path: 'entity', component: EntityComponent, data: { title: 'Entity Component' } },
  { path: 'learning', component:LearningComponent , data: { title: 'Learning Component ' } },
  { path: 'tryit', component: TryitComponent, data: { title: 'Tryit Component' } },
  { path: 'user', component: UserComponent , data: { title: 'User Component ' } },
  { path: 'home', component: HomeComponent , data: { title: 'Home Component ' } },
  { path: 'setting', component: SettingComponent, data: { title: 'Setting Component' } }
 
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IntentsComponent,
    EntityComponent,
    LearningComponent,
    TryitComponent,
    UserComponent,
    SettingComponent,
    HomeComponent,
    WorkSpaceComponent,
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,FormsModule, ReactiveFormsModule,HttpClientModule,// HttpModule,
    RouterModule.forRoot(
      appRoutes,
      
      { useHash: true } // <-- debugging purposes only
    ),
    CustomMaterialModule
  ],
  entryComponents: [IntentsComponent],
  providers: [IntentService,EntityService,WorkspaceService,LearningService],
  bootstrap: [AppComponent]
})
export class AppModule { }

