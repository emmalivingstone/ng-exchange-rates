import { Component, Input } from '@angular/core';
import { Show } from 'src/app/shared/models';

@Component({
  selector: 'dsgn-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent {
  @Input() show: Show;
  // TODO: Make this an API call to the configuration endpoint incase it changes
  private baseImageUrl = 'http://image.tmdb.org/t/p/w342/';

  get imageSrc() {
    // TODO - add in footer with tmb logo and read attribution on site
    return `${this.baseImageUrl}${this.show.poster_path}`;
  }
}
