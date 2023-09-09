import { Component, OnInit } from '@angular/core';
import { TododConstant } from '../utils/contant.data';
import { AppRoutesModel } from '../utils/todo.interface';
export type APP_THEME = 'CLASSIC-BLUE' | 'DEEP-FOREST' | 'SUN-RISE';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes: AppRoutesModel[] = TododConstant.appHeaderRoutes;
  appTheme: APP_THEME = 'CLASSIC-BLUE';
  constructor() { }

  ngOnInit(): void {
    this.applyTheme()
  }

  applyTheme(theme?: APP_THEME): void {
    let theme_Color = '#008b00'
    if (theme === 'CLASSIC-BLUE') {
      theme_Color = '#19236c'
    } else if(theme === 'DEEP-FOREST'){
      theme_Color = '#008b00'
    } else if(theme === 'SUN-RISE'){
      theme_Color = '#ff8400'
    }
    document.documentElement.style.setProperty('--primary-base', theme_Color);
  }
}
