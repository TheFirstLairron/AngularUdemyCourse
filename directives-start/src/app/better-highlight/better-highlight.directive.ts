import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @Input()
    public defaultColor = 'transparent';

    @Input()
    public highlightColor = 'blue';

    @HostBinding('style.backgroundColor')
    public backgroundColor: string;

    public constructor(private renderer: Renderer2, private elRef: ElementRef) { }

    public ngOnInit()
    {
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter')
    public mouseOver(eventData: Event) {
        
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave')
    public mouseleave(eventData: Event) {
        this.backgroundColor = this.defaultColor;
    }
}
