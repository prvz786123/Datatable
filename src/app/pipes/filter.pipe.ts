import { Pipe, PipeTransform } from '@angular/core';

import * as _ from "lodash";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], query:string): any {
    if (query) {
      query=query.toLocaleLowerCase();
        return _.filter(array, (row)=>{
          // if(row[3].indexOf(query) > -1){
          //   return true
          // }
          for(let val in row){
            if(String(row[val]).toLowerCase().indexOf(query) > -1){
               return true; 
            }
          }
          
        });
    }
    return array;

}

}