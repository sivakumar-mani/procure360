import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { SupplierInfoEditComponent } from './components/supplier/supplier-info-edit/supplier-info-edit.component';
import { SupplierInformationComponent } from './components/supplier/supplier-edit-tabs/supplier-information/supplier-information.component';
import { SupplierAddressDetailsComponent } from './components/supplier/supplier-edit-tabs/supplier-address-details/supplier-address-details.component';
import { SupplierContactDetailsComponent } from './components/supplier/supplier-edit-tabs/supplier-contact-details/supplier-contact-details.component';
import { SupplierFinancialBusinessComponent } from './components/supplier/supplier-edit-tabs/supplier-financial-business/supplier-financial-business.component';
import { SupplierBankDetailsComponent } from './components/supplier/supplier-edit-tabs/supplier-bank-details/supplier-bank-details.component';
import { SupplierCategoryScopeComponent } from './components/supplier/supplier-edit-tabs/supplier-category-scope/supplier-category-scope.component';
import { AttachmentDetailsComponent } from './components/supplier/supplier-edit-tabs/attachment-details/attachment-details.component';
import { FinalViewComponent } from './components/supplier/supplier-edit-tabs/final-view/final-view.component';


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
    SupplierInfoEditComponent,
    SupplierInformationComponent,
    SupplierAddressDetailsComponent,
    SupplierContactDetailsComponent,
    SupplierFinancialBusinessComponent,
    SupplierBankDetailsComponent,
    SupplierCategoryScopeComponent,
    AttachmentDetailsComponent,
    FinalViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
