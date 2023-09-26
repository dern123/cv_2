import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }
  
  public currentLnguage = localStorage.getItem('select-language')

  getLanguage(){
    // if(!this.currentLnguage){
    //   localStorage.setItem('select-language', 'eng')
    //   this.currentLnguage = 'eng'
    // }
    // return this.currentLnguage
  }

  changeLanguage(lang: string){
    localStorage.setItem('select-language', lang)
    this.currentLnguage = lang
  }
}
