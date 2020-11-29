import { Injectable } from '@angular/core';
import {  Response } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AppSetting } from '../app.setting';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class LearningService {

  learningChanged = new Subject();

  constructor(private http:HttpClient) {}

  getLearning(id:any) {


      return this.http.get(AppSetting.API_ENDPOINT + 'nlp/entity/' +id)
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