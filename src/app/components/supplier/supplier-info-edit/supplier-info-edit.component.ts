import { Component, OnInit } from '@angular/core';
import { HtmlParser } from '@angular/compiler';

interface Suppliertabs {
  id?: number;
  tabid: string;
  tabname: string;
  showclass:string;
  activeclass:string;
  componentname: any
}

const SUPPLIERSTABS: Suppliertabs[] = [
  
  {
    tabid: "supplier-information",
    tabname:"Supplier Information",
    showclass:"show",
    activeclass:"active",
    componentname: "app-supplier-information"

  },
  {
    tabid: "address-details",
    tabname:"Address Details",
    showclass:"",
    activeclass:"",
    componentname: "app-supplier-address-details"
  },
  {
    tabid: "contact-details",
    tabname:"Contact Details",
    showclass:"",
    activeclass:"",
    componentname: "app-supplier-contact-details"
  },
  {
    tabid: "financial-business",
    tabname:"Financial Business",
    showclass:"",
    activeclass:"",
    componentname: "app-supplier-financial-business"
  },
  {
    tabid: "bank-details",
    tabname:"Bank Details",
    showclass:"",
    activeclass:"",
    componentname: "app-supplier-bank-details"
  },
  {
    tabid: "category-scope",
    tabname:"Category Scope",
    showclass:"",
    activeclass:"",
    componentname: "app-supplier-category-scope"
  },
  {
    tabid: "attachment-section",
    tabname:"Attachement Section",
    showclass:"",
    activeclass:"",
    componentname: "app-attachment-details"
  },
  {
    tabid: "final-view",
    tabname:"Final View",
    showclass:"",
    activeclass:"",
    componentname: "app-supplier-category-scope"
  }
  
];

@Component({
  selector: 'app-supplier-info-edit',
  templateUrl: './supplier-info-edit.component.html',
  styleUrls: ['./supplier-info-edit.component.scss']
})
export class SupplierInfoEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  get suppliertabs(): Suppliertabs[] {
    return SUPPLIERSTABS
      .map((suppliertabs, i) => ({id: i + 1, ...suppliertabs}));
  }

}
