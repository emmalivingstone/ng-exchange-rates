import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dsgn-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  @Input() title: string;
  @Input() hasFooter: boolean;
  @Input() size = 'small';
}
