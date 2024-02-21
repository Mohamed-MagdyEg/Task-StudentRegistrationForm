import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'welcome-page',
    loadChildren: () =>
      import('../app//components/first-module/first-module.module').then((m) => m.FirstModule),
  },
  {

    path: "student-registration",
    loadChildren: () =>
      import("../app/components/second-module/second-module.module").then(
        (m) => m.SecondModule
      ),
  }
  // {
  //   path: '',
  //   component: AppComponent,
  //   children: [



  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
