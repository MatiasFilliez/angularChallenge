import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path:"",
    component:MenuPrincipalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
