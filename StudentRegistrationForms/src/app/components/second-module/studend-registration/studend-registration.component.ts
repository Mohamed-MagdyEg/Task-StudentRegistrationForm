import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { StudentRegisterationService } from '../../../services/student-registration-service';
import { ConfirmationModalComponent } from './modal/confirmation-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-studend-registration',
  templateUrl: './studend-registration.component.html',
  styleUrl: './studend-registration.component.scss'
})

export class  StudendRegistrationComponent implements OnInit{
  loginForm: FormGroup;
  imageUrl:string | ArrayBuffer | null="";
  @ViewChild('file')
  file!: ElementRef<any>
  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private studentRegisterationService :StudentRegisterationService,
    private translate: TranslateService,

  ) {
    this.loginForm = new FormGroup({
      studentId: new FormControl('', Validators.required),
      studentName: new FormControl('', [Validators.required, Validators.minLength(8)]),
      studentMobile: new FormControl('', [Validators.required, Validators.maxLength(11),Validators.pattern(/^[0-9]*$/),]),
      studentEmail: new FormControl('', [Validators.required, Validators.email]),
      studentGraduationDate: new FormControl( '',Validators.required),
      studentGender: new FormControl( Validators.required),
      studentGraduationCertificateImage: new FormControl(' ',  [Validators.required],),
    });

  }
  ngOnInit(): void {
    this.translate.use(localStorage.getItem('lang') || 'ar')

    const storedLoginFormString = localStorage.getItem('loginForm');

    if (storedLoginFormString) {
      const storedFormData = JSON.parse(storedLoginFormString);

      // Set form values with the retrieved data
      this.loginForm.setValue(storedFormData);


    }
  }

  onFileChange(event: any) {
    const fileInput = event.target;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file: File = fileInput.files[0];
      const maxSizeInBytes = 2 * 1024 * 1024;
      if (file.size > maxSizeInBytes) {
        fileInput.value = '';
        this.showFileSizeExceededToast();
        return;
      }


      if (file) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.loginForm.get('studentGraduationCertificateImage')?.setValue(e.target.result);

        };

        reader.readAsDataURL(file);
      }
    }
  }

  onSubmit() {
    console.log(this.loginForm.value);
if(this.loginForm.invalid){
  return
}
    this.studentRegisterationService.saveData(this.loginForm).subscribe({
      next: (response) => {
        this.openPoup();
        console.log('Next:', response.message);
        const loginForm = this.loginForm.value;
        localStorage.setItem('loginForm', JSON.stringify(loginForm));

      },
      error: (error) => {
        console.error('error', error);
      },
      complete: () => {
        console.log('completed');
      }
    });
  }



  openPoup(): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: "400px",
      disableClose: true,
    });
  }
  resetData(){
    this.loginForm.reset();
    localStorage.removeItem('loginForm');
    this.file.nativeElement.value =""

  }
  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);

    if (!control) {
      return '';
    }

    if (control.hasError('required')) {
      return this.translate.instant(`${controlName}IsRequired`);
    }

    if (control.hasError('minlength')) {
      return this.translate.instant(`${controlName}MinLength`);
    }

    if (control.hasError('email')) {
      return this.translate.instant('InvalidEmailFormat');
    }

    if (control.hasError('pattern')) {
      return this.translate.instant('InvalidMobileFormat');
    }

    if (control.hasError('maxlength')) {
      return this.translate.instant(`${controlName}MaxLength`);
    }

    return '';
  }
  showFileSizeExceededToast() {
    this.snackBar.open('File size exceeded. Maximum allowed size is 2 MB.', 'Dismiss', {
      duration: 5000,
      panelClass: ['error-toast'],
    });
  }



}
