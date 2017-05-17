import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit 
{

    constructor(private elementRef: ElementRef) { }

    public ngOnInit() 
    {
        // Not good practice. Should use the "Renderer"
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}
