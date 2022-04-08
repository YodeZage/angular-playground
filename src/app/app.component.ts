import { Component } from '@angular/core';

import { NavList } from "@ap/shared/static-values/nav-list";

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navMapList = NavList;

}
