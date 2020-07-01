import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../../services/supplier.service';
import { Supplier } from '../../../services/Supplier';

@Component({
  selector: 'app-supplier-info',
  templateUrl: './supplier-info.component.html',
  styleUrls: ['./supplier-info.component.scss']
})


export class SupplierInfoComponent implements OnInit {
  
  suppliers : Supplier[] = [];

  constructor(public supplierService: SupplierService) { }

  ngOnInit() {
    this.supplierService.getAll().subscribe((data: Supplier[])=>{
      this.suppliers = data;
      console.log(this.suppliers);      
    }) 
    
   }

  //  deletePost(id){
  //   this.supplierService.delete(id).subscribe(res => {
  //        this.suppliers = this.suppliers.filter(item => item.applicationno !== id);
  //        console.log('Supplier deleted successfully!');
  //   })
  // }

  deleteSupplier(supplier: Supplier): void {
    this.supplierService.delete(supplier.applicationno)
      .subscribe( data => {
        this.suppliers = this.suppliers.filter(u => u !== supplier);
      })
  };
}


