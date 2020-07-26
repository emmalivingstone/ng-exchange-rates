import { Component, Input } from '@angular/core';

@Component({
  selector: 'dsgn-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  @Input() total = 0;
  @Input() current = 0;
  @Input() progressColor = '--cyan-300';
  @Input() remainingColor = '--blue-grey-050';
  @Input() type: 'pie' | 'bar';

  getPieBackgroundImage() {
    const percentage = (this.current / this.total) * 100;
    const percentageDeg = `${percentage * 3.6}deg`;
    return `conic-gradient(var(${this.progressColor}) ${percentageDeg}, var(${this.remainingColor}) ${percentageDeg},
      var(${this.remainingColor}) 0)`;
  }

  getPercentage() {
    return `${(this.current / this.total) * 100}%`;
  }
}
