import { MatButtonModule } from '@angular/material/button';
import { StudendRegistrationComponent } from './studend-registration/studend-registration.component';
import { SecondModuleRoutingModule } from './second-module-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ConfirmationModalComponent } from './studend-registration/modal/confirmation-modal.component';
import {MatDialogContent,
} from '@angular/material/dialog';
import { createTranslateLoader } from '../../app.module';


@NgModule({
  declarations: [StudendRegistrationComponent, ConfirmationModalComponent],
  imports: [
    SecondModuleRoutingModule,SharedModule,MatFormFieldModule,MatRadioModule,MatButtonModule,MatDialogContent,
    MatInputModule,MatDatepickerModule,MatCardModule ,  TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),

  ],
  providers: [provideNativeDateAdapter()],

})
export class SecondModule { }
