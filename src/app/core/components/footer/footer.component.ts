import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  readonly poweredBy = "Powered by Zhenkang Yao ©2022-2022.";
  readonly licenseInfo = "Code licensed under an MIT-style License."

  constructor() { }

  ngOnInit(): void {
  }

}
