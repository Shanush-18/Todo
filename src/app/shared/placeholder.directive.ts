import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[todoPlaceholder]'
})
export class PlaceholderDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
