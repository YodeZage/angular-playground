import {Component, OnInit} from '@angular/core';

import { FullNavList } from "@ap/shared/static-values/nav-list";
import { INavMap } from "@ap/shared/interfaces/nav-map";

@Component({
  selector: 'ap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fullNavMapList: Map<string, INavMap> = FullNavList;

  constructor() { }

  ngOnInit(): void {
  }

}
