import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Login1Component } from './components/login1/login1.component';
import { Login2Component } from './components/login2/login2.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';

import { SupplierInfoComponent } from './components/supplier/supplier-info/supplier-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SupplierInformationComponent } from './components/supplier/supplier-information/supplier-information.component';
import { SupplierAddressDetailsComponent } from './components/supplier//supplier-address-details/supplier-address-details.component';
import { SupplierContactDetailsComponent } from './components/supplier//supplier-contact-details/supplier-contact-details.component';
import { SupplierFinancialBusinessComponent } from './components/supplier//supplier-financial-business/supplier-financial-business.component';
import { SupplierBankDetailsComponent } from './components/supplier//supplier-bank-details/supplier-bank-details.component';
import { SupplierCategoryScopeComponent } from './components/supplier//supplier-category-scope/supplier-category-scope.component';
import { AttachmentDetailsComponent } from './components/supplier//attachment-details/attachment-details.component';
import { FinalViewComponent } from './components/supplier//final-view/final-view.component';
import { DashboardTendersComponent } from './components/dashboard-tenders/dashboard-tenders.component';
import { DashboardContactsComponent } from './components/dashboard-contacts/dashboard-contacts.component';
import { ProgressBarComponent } from './components/supplier/progress-bar/progress-bar.component';

import { ModelWindowComponent } from './components/model-window/model-window.component';
import { DataTablesModule } from 'angular-datatables';
import { NgbdSortableHeader } from './services/sortable.directive';
import { ClaimSearchComponent } from './components/contracts/claim-search/claim-search.component';
import { ContractSearchComponent } from './components/contracts/contract-search/contract-search.component';
import { VariationOrderSearchComponent } from './components/contracts/variation-order-search/variation-order-search.component';
import { CompletionCertificateSearchComponent } from './components/milestone-completion/completion-certificate-search/completion-certificate-search.component';
import { InvoiceSearchComponent } from './components/payment/invoice-search/invoice-search.component';
import { InnerDashboardComponent } from './components/dashboard-module/inner-dashboard/inner-dashboard.component';
import { NotificationComponent } from './components/notification/notification/notification.component';
import { InvoiceDetailsComponent } from './components/payment/invoice-details/invoice-details.component';
import { ContractInformationComponent } from './components/contracts/contract-information/contract-information.component';
import { SupplierInfoAddComponent } from './components/supplier/supplier-info-add/supplier-info-add.component';
import { SupplierInfoEditComponent } from './components/supplier/supplier-info-edit/supplier-info-edit.component';
import { ContractEditComponent } from './components/contracts/contract-edit/contract-edit.component';
import { ClaimEditComponent } from './components/contracts/claim-edit/claim-edit.component';
import { ValidationOrderDetailsComponent } from './components/contracts/validation-order-details/validation-order-details.component';
import { MilestoneCompletionDetailsComponent } from './components/milestone-completion/milestone-completion-details/milestone-completion-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Login1Component,
    Login2Component,
    DashboardComponent,
    LayoutComponent,
    SupplierInfoComponent,
    SupplierInformationComponent,
    SupplierAddressDetailsComponent,
    SupplierContactDetailsComponent,
    SupplierFinancialBusinessComponent,
    SupplierBankDetailsComponent,
    SupplierCategoryScopeComponent,
    AttachmentDetailsComponent,
    FinalViewComponent,
    DashboardTendersComponent,
    DashboardContactsComponent,
    ProgressBarComponent,
    ModelWindowComponent,
    NgbdSortableHeader,
    ClaimSearchComponent,
    ContractSearchComponent,
    VariationOrderSearchComponent,
    CompletionCertificateSearchComponent,
    InvoiceSearchComponent,
    InnerDashboardComponent,
    NotificationComponent,
    InvoiceDetailsComponent,
    ContractInformationComponent,
    SupplierInfoAddComponent,
    SupplierInfoEditComponent,
    ContractEditComponent,
    ClaimEditComponent,
    ValidationOrderDetailsComponent,
    MilestoneCompletionDetailsComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DataTablesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
