import { Component, OnInit } from '@angular/core';

interface Supplier {
  id?: number;
  applicationno: number;
  scopeofwork: string;
  subcategory: string;
  childcategory: string;
  submiteddate: string;
  status: string;

}

const SUPPLIERS: Supplier[] = [
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'

  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  },
 
  {
    applicationno: 15022525035555,
    scopeofwork: 'scope of work',
    subcategory: 'sub category',
    childcategory: 'child category',
    submiteddate: "10-052020",
    status: 'Active'
  }
];

@Component({
  selector: 'app-supplier-contact-details',
  templateUrl: './supplier-contact-details.component.html',
  styleUrls: ['./supplier-contact-details.component.scss']
})
export class SupplierContactDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  page = 1;
  pageSize = 5;
  collectionSize = SUPPLIERS.length;

  get suppliers(): Supplier[] {
    return SUPPLIERS
      .map((supplierinfo, i) => ({id: i + 1, ...supplierinfo}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
