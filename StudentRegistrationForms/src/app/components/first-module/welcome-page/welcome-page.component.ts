import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent implements OnInit{
  constructor(private router: Router,    private translate: TranslateService,

    )
  {}

  ngOnInit(): void {
    this.translate.use(localStorage.getItem('lang') || 'ar')
  }
  register(){
    this.router.navigate(['/student-registration']);

  }
}
