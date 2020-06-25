import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login1Component }   from './components/login1/login1.component';
import { Login2Component }   from './components/login2/login2.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SupplierInfoComponent } from './components/supplier/supplier-info/supplier-info.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardTendersComponent } from './components/dashboard-tenders/dashboard-tenders.component';
import { SupplierAddressDetailsComponent } from './components/supplier/supplier-address-details/supplier-address-details.component';
import { SupplierContactDetailsComponent } from './components/supplier/supplier-contact-details/supplier-contact-details.component';
import { SupplierFinancialBusinessComponent } from './components/supplier/supplier-financial-business/supplier-financial-business.component';
import { SupplierBankDetailsComponent } from './components/supplier/supplier-bank-details/supplier-bank-details.component';
import { SupplierCategoryScopeComponent } from './components/supplier/supplier-category-scope/supplier-category-scope.component';
import { AttachmentDetailsComponent } from './components/supplier/attachment-details/attachment-details.component';
import { FinalViewComponent } from './components/supplier/final-view/final-view.component';
import { SupplierInformationComponent } from './components/supplier/supplier-information/supplier-information.component';
import { DashboardContactsComponent } from './components/dashboard-contacts/dashboard-contacts.component';

import { ClaimSearchComponent } from './components/contacts/claim-search/claim-search.component';
import { VariationOrderSearchComponent } from './components/contacts/variation-order-search/variation-order-search.component';
import { ContactSearchComponent } from './components/contacts/contact-search/contact-search.component';



const routes: Routes = [
  { path: '', redirectTo: '/login1', pathMatch: 'full' },
  { path: 'login1', component: Login1Component },
  { path: 'login2', component: Login2Component   }, 
  { path: '', component: LayoutComponent,
    children: [
      { 
        path: 'dashboard', 
        component: DashboardComponent},
      {
          path: 'supplier-info',    
          component: SupplierInfoComponent,
      },
      // {
      //   path: 'supplier-info-edit',    
      //   component: SupplierInfoEditComponent,
      // },
      {
        path: 'tenders-dashboard',    
        component: DashboardTendersComponent,
      },
      {
        path: 'supplier-information',    
        component: SupplierInformationComponent,
      },
      {
        path: 'supplier-address-details',    
        component: SupplierAddressDetailsComponent,
      },
      {
        path: 'supplier-contact-details',    
        component: SupplierContactDetailsComponent,
      },
      {
        path: 'supplier-financial-business',    
        component: SupplierFinancialBusinessComponent,
      },
      {
        path: 'supplier-bank-details',    
        component: SupplierBankDetailsComponent,
      },
      {
        path: 'supplier-category-scope',    
        component: SupplierCategoryScopeComponent,
      },
      {
        path: 'attachment-section',    
        component: AttachmentDetailsComponent,
      },
      {
        path: 'final-view',    
        component: FinalViewComponent,
      },
      {
        path: 'dashboard-contacts',    
        component: DashboardContactsComponent,
      },
      {
        path: 'contact-search',    
        component: ContactSearchComponent,
      },
      {
        path: 'claim-search',    
        component: ClaimSearchComponent,
      },
      {
        path: 'variation-order-search',    
        component: VariationOrderSearchComponent,
      }
    ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
