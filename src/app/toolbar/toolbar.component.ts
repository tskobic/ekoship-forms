import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  faIcon = faBars;

  isNavOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  setNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
