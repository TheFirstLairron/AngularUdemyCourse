import { Directive, HostBinding, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open')
    public isOpen = false;

    constructor() { }

    @HostListener('click')
    public clicked(eventData: Event)
    {
        this.isOpen = !this.isOpen;
    }

}
