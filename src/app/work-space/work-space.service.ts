import { Injectable } from '@angular/core';
import {  Response } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AppSetting } from '../app.setting';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class WorkspaceService {

  workspaceChanged = new Subject();

  constructor(private http:HttpClient) {}

  getWorkspace() {
      
      return this.http.get(AppSetting.API_ENDPOINT + 'nlp/getworkspace')
      .map(
        (response: Response) => {
          const data = response;
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );



  }
  

}