import {Component, EventEmitter, Output , OnInit} from '@angular/core';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onNavSideIcon: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavSide(): void {
    this.onNavSideIcon.emit();
  }

}
