import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  evenNumberColor = 'yellow';
  oddNumberColor = 'lightblue';

  @Input() appHighlight: number = 0;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appHighlight % 2 === 0) {
      this.highlight(this.evenNumberColor);
    } else {
      this.highlight(this.oddNumberColor);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
