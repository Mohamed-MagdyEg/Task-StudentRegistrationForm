import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudendRegistrationComponent } from './studend-registration/studend-registration.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component:StudendRegistrationComponent
  }, ];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),FormsModule],
  exports:[RouterModule]
})
export class SecondModuleRoutingModule { }
