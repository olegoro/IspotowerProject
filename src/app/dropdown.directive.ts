import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @Input() isArrowDown: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event']) toggleOpen(event: Event) {
    let dropdownArrow = this.el.nativeElement.querySelector('.arrow');
    let items = this.el.nativeElement.querySelector('.dropdownSubItems');
    let parent = this.renderer.parentNode(this.el.nativeElement);
    let subItems = parent.querySelector('.dropdownSubItems');
    let dropdownName = parent.querySelector('.header');

    console.log(dropdownName);

    if (this.isArrowDown) {
      this.openDropdown(dropdownArrow, subItems, dropdownName);
    } else {
      this.closeDropdown(dropdownArrow, subItems, dropdownName);
    }
  }

  private openDropdown(dropdownArrow, subItems, dropdownName) {
    this.renderer.removeClass(dropdownArrow, 'down');
    this.renderer.addClass(dropdownArrow, 'up');
    subItems.style.display = 'inline';
    dropdownName.style.color = 'orange';
    this.isArrowDown = !this.isArrowDown;
  }

  private closeDropdown(dropdownArrow, subItems, dropdownName) {
    this.renderer.removeClass(dropdownArrow, 'up');
    this.renderer.addClass(dropdownArrow, 'down');
    subItems.style.display = 'none';
    dropdownName.style.color = '';
    this.isArrowDown = !this.isArrowDown;
  }
}
