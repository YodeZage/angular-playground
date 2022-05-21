import { Component } from '@angular/core';

import { FullNavList } from "@ap/shared/static-values/nav-list";

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawerMode } from "@angular/material/sidenav";

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isXSmall: boolean;
  sideNavMode: MatDrawerMode;
  smallDisplay = Breakpoints.XSmall;
  fullNavMapList = FullNavList;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe(Breakpoints.XSmall).subscribe(result => {
        this.isXSmall = result.breakpoints[this.smallDisplay];
        this.sideNavMode = this.isXSmall ? "over" : "side";
    });
  }
}
