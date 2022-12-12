import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LightComponent } from '../../components/light/light.component';

@Component({
  selector: 'app-light-switcher',
  templateUrl: './light-switcher.component.html',
  styleUrls: ['./light-switcher.component.css'],
})
export class LightSwitcherComponent implements OnInit {
  @ViewChild('first', { read: ElementRef })
  firstLight?: ElementRef;

  @ViewChild('second', { read: ElementRef })
  secondLight?: ElementRef;

  @ViewChild('third', { read: ElementRef })
  thirdLight?: ElementRef;

  turnedOnLight?: number;

  backgroundColor: string = '#37b5ac';

  constructor() {}

  ngOnInit(): void {}

  turnLightOn(component: LightComponent) {
    switch (component.id) {
      case 1:
        this.firstLight!.nativeElement.style.backgroundColor =
          this.backgroundColor;
        this.secondLight!.nativeElement.style.backgroundColor = '';
        this.thirdLight!.nativeElement.style.backgroundColor = '';

        this.turnedOnLight = component.id;
        break;
      case 2:
        this.firstLight!.nativeElement.style.backgroundColor = '';
        this.secondLight!.nativeElement.style.backgroundColor =
          this.backgroundColor;
        this.thirdLight!.nativeElement.style.backgroundColor = '';

        this.turnedOnLight = component.id;
        break;
      case 3:
        this.firstLight!.nativeElement.style.backgroundColor = '';
        this.secondLight!.nativeElement.style.backgroundColor = '';
        this.thirdLight!.nativeElement.style.backgroundColor =
          this.backgroundColor;

        this.turnedOnLight = component.id;
        break;
      default:
        break;
    }
  }
}
