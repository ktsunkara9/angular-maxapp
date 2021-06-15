import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDrodown]'
})
export class DrodownDirective {
  @HostBinding('class.show') isOpen = false;
  
  constructor(private el: ElementRef) { }

  @HostListener('click') openDropDown() {
    console.log('clicked')
    this.isOpen = !this.isOpen;
    if(this.isOpen){
      this.el.nativeElement.querySelector('.dropdown-menu').classList.add('show');
    }
  }

}
