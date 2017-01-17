import {Component, OnInit, trigger, style, state, transition, animate} from '@angular/core';

@Component({
  selector: 'app-animation2',
  templateUrl: './animation2.component.html',
  styleUrls: ['./animation2.component.css'],
  animations: [
    trigger('myListTrigger', [
      state('normal', style({
        transform: 'scale(1)',
        opacity: '1'
      })),
      state('newItem', style({
        transform: 'translateY(20px)',
        opacity: '0',
      })),
      transition('void => *', [
       // style({ opacity: '0',  transform: 'translateY(20px)' }),
        style({ opacity: '0',  transform: 'translateY(20px)' }),
        //style({ opacity: '0',  transform: 'scale(1.4)' }),


          animate('500ms')
        ])
    ])
  ]
})
export class Animation2Component implements OnInit {
  public items = ['first', 'second'];

  public listState: string = 'normal';

  constructor() { }

  ngOnInit() {
  }

  public AddNewItem():void {
    this.items.push('another item');

  }
}
