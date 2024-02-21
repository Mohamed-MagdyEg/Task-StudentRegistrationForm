import { MatButtonModule } from '@angular/material/button';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FirstModuleRoutingModule } from './first-module-routing.module';
import { Injectable, NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { createTranslateLoader } from '../../app.module';

@Injectable({
  providedIn: 'root',
})


@NgModule({
  declarations: [WelcomePageComponent],
  imports: [FirstModuleRoutingModule,SharedModule,MatButtonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),],

  providers: [
  ],
exports:[
  WelcomePageComponent
]
})
export class FirstModule { }
