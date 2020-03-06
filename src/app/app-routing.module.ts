

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  
  { path: '', redirectTo: 'main/dashboard', pathMatch: 'full' },
  {
    path: 'main', 
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  { path: 'login', redirectTo: 'admin/login', pathMatch: 'full'},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule).catch((err)=>{
      console.log(err);
    })
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }