import { EventEmitter, Injectable } from '@angular/core';
import languageUA from "../language/ukr.json";
import languageEN from "../language/eng.json";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public currentLanguage: any = languageEN;
  constructor() { }
  public langChoice: EventEmitter<any> = new EventEmitter();
  public currentLnguage = localStorage.getItem('select-language');

  getLanguage(){
    // if(!this.currentLnguage){
    //   localStorage.setItem('select-language', 'eng')
    //   this.currentLnguage = 'eng'
    // }
    // return this.currentLnguage
  }

  changeLanguages(event:any){
    const language = event?.target?.value ? event.target.value : event;
    if(language == "Eng"){
      this.langChoice.emit(languageEN);
      return
    }
    if(language == "Ukr"){
      this.langChoice.emit(languageUA);
      return
    }
  }
}
