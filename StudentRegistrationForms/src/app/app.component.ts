import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'StudentRegistrationForm';
  lang ='en'

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,

    private router: Router,
  ) {
    this.lang = localStorage.getItem('lang') || 'en';
    this.translate.use(this.lang);
    this.translate.setDefaultLang('en')

  }


  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'en';
    this.translate.use(this.lang);
    this.translate.setDefaultLang('en')
    this.langCheck();
    this.router.navigate(['/welcome-page']);

  }

  langCheck() {
    this.translate.use(localStorage.getItem('lang') || 'ar');
    if (this.translate.currentLang == 'ar') {
      document.body.classList.remove('en');
      document.body.classList.add('Ar');
      document.getElementsByTagName('html')[0].dir = 'rtl';
      document.getElementsByTagName('body')[0].lang = 'ar';
    } else {
      document.body.classList.remove('Ar');
      document.body.classList.add('en');
      document.getElementsByTagName('html')[0].dir = 'ltr';
      document.getElementsByTagName('body')[0].lang = 'en';
    }
  }
  switchLanguage() {
    this.lang = this.lang === 'en' ? 'ar' : 'en';
    this.translate.use(this.lang);
    localStorage.setItem('lang', this.lang);
    this.router.navigate([], {
      queryParams: { lang: this.lang },

    });
    window.location.reload();
  }
}
