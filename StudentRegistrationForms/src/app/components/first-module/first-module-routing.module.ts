import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

 const routes: Routes = [
  {
    path:'',
    component:WelcomePageComponent
  }
 ];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),FormsModule],
  exports:[RouterModule]
})
export class FirstModuleRoutingModule { }
