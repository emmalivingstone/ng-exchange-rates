import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/core/services/shows.service';

@Component({
  selector: 'dsgn-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
})
export class CollectionPageComponent implements OnInit {
  constructor(private showsService: ShowsService) {}

  ngOnInit(): void {
    this.showsService.getPopular().subscribe((res) => {
      console.log(res);
    });
  }
}
