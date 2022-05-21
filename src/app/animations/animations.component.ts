import { Component, OnInit } from '@angular/core';
import { INavMap } from '@ap/shared/interfaces/nav-map';
import { FullNavList } from '@ap/shared/static-values/nav-list';

@Component({
  selector: 'ap-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {

  animationSubNavList?: INavMap[];

  constructor() { }

  ngOnInit(): void {
    this.animationSubNavList = FullNavList.get("Animation")?.subPath;
  }

}
