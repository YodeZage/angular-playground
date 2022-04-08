import {Component, Input, OnInit} from '@angular/core';

import { NavList } from "@ap/shared/static-values/nav-list";

@Component({
  selector: 'ap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navMapList = NavList;

  constructor() { }

  ngOnInit(): void {
  }

}
