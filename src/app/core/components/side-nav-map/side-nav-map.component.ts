import { Component, OnInit, Input } from '@angular/core';

import {INavMap} from '@ap/shared/interfaces/nav-map';

@Component({
  selector: 'ap-side-nav-map',
  templateUrl: './side-nav-map.component.html',
  styleUrls: ['./side-nav-map.component.scss']
})
export class SideNavMapComponent implements OnInit {

  @Input() sideNavMapList: INavMap[];

  rippleColor = "#0000000a";

  constructor() { }

  ngOnInit(): void {

  }

}
