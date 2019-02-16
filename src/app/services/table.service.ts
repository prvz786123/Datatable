import { Injectable } from '@angular/core';

import { Http } from "@angular/http"

import {map} from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:Http) {
    
   }

  getTableData(){
    return this.http.get('https://scarydescriptiveassembly--prvz786123.repl.co/api/items') .pipe(
      map(res=>res.json())
    );
  }
}
