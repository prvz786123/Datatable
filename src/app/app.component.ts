import { Component, OnInit } from '@angular/core';
import { TableService } from "./services/table.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'playground3';

  t_columns;
  t_rows;
  searchQuery="";


  constructor(private tableService:TableService){

  }

  ngOnInit(){
      this.tableService.getTableData().subscribe((res)=>{
        if(res.success){
          this.t_columns=Object.keys(res.data[0]);
          this.t_rows=res.data;
        }
      })
  }
}
