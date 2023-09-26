import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
// import { LanguageService } from './services/language.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv_2';
  constructor(
    public translate: TranslateService,
    private route: ActivatedRoute
    ) {
  }

  ngOnInit(): void {
    this.translate.addLangs([ 'eng','ukr']);
    this.translate.setDefaultLang('eng');
  }
}
