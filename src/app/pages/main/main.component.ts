
import {TranslateService} from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
// import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // public open: boolean = false
  constructor(
    public translate: TranslateService,
  ) {}

  ngOnInit(): void {
  }

  openSelect(){
    // this.open = !this.open
  }
  changeLanguage(e: any){
    // this.open = !this.open
  }
}
