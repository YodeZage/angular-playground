import { Component } from '@angular/core';

import {INavMap} from '@ap/shared/interfaces/nav-map';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navMapList: INavMap[] = [
    {name: "Basic", path: "/#"},
  ]

}
