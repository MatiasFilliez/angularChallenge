import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { AppComponent } from './app.component';
import { FormViewOneComponent } from './pages/form-view-one/form-view-one.component';

export const routes: Routes = [
  {
    path:"",
    component:MenuPrincipalComponent
  },
  {
    path:"viewOne",
    component:FormViewOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
