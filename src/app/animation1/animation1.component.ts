import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'app-animation1',
  templateUrl: './animation1.component.html',
  styleUrls: ['./animation1.component.css'],
  animations: [
    trigger('myButtonTrigger', [
        state('normal', style({
          transform: 'scale(1)'
        })),
        state('large', style({
          transform: 'scale(1.2)'
        })),
        transition('normal => large', animate('500ms ease-in')),
        transition('large => normal', animate('500ms ease-out'))
    ])
  ]
})
export class Animation1Component implements OnInit {
  public buttonState: string = 'normal';

  constructor() { }

  ngOnInit() {
  }

  /// method just toggle button state
  public toggleButtonState():void {
    this.buttonState = (this.buttonState==='normal') ? 'large' : 'normal';
  }
}
