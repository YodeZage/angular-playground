import {Component, Input, OnInit} from '@angular/core';

import { INavMap } from "@ap/shared/interfaces/nav-map";

@Component({
  selector: 'ap-nav-card',
  templateUrl: './nav-card.component.html',
  styleUrls: ['./nav-card.component.scss']
})
export class NavCardComponent implements OnInit {

  @Input() navMap: INavMap;

  constructor() { }

  ngOnInit(): void {
    if (!this.navMap || !this.navMap.path) {
      this.navMap.name = "Home";
      this.navMap.path = "/home";
    }
  }

}
