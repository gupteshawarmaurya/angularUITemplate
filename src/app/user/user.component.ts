import { Component, OnInit } from '@angular/core';
import {of,} from 'rxjs';
import {delay} from 'rxjs/operators';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'}
  
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;

  isLoading = true;

  ngOnInit() {
    of(ELEMENT_DATA).pipe(delay(8000))
     .subscribe(data => {
       this.isLoading = false;
       this.dataSource = data
     }, error => this.isLoading = false);
  }
}
