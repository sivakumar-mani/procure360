import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login1Component }   from './components/login1/login1.component';
import { Login2Component }   from './components/login2/login2.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SupplierInfoComponent } from './components/supplier/supplier-info/supplier-info.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SupplierInfoEditComponent } from './components/supplier/supplier-info-edit/supplier-info-edit.component';



const routes: Routes = [
  { path: '', redirectTo: '/login1', pathMatch: 'full' },
  { path: 'login1', component: Login1Component },
  { path: 'login2', component: Login2Component   }, 
  { path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      {
          path: 'supplier-info',    
          component: SupplierInfoComponent,
      },
      {
        path: 'supplier-info-edit',    
        component: SupplierInfoEditComponent,
    }
    ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
