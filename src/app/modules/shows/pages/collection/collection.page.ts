import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShowsService } from 'src/app/core/services/shows.service';
import { Show } from 'src/app/shared/models';

@Component({
  selector: 'dsgn-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
})
export class CollectionPageComponent implements OnInit {
  shows$: Observable<Show[]>;

  constructor(private showsService: ShowsService) {}

  ngOnInit(): void {
    this.shows$ = this.showsService.getPopular().pipe(map((res) => res.results));
    this.showsService.getPopular().subscribe((res) => {
      console.log(res);
    });
  }
}
