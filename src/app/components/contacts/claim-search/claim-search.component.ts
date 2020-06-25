import { Component, OnInit, ViewChild } from '@angular/core';
declare var $;
@Component({
  selector: 'app-claim-search',
  templateUrl: './claim-search.component.html',
  styleUrls: ['./claim-search.component.scss']
})
export class ClaimSearchComponent implements OnInit {

  @ViewChild('dataTable') table;
  dataTable: any;
  constructor(){
  }

  ngOnInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

}
