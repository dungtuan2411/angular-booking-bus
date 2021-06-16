import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.scss'],
})
export class ItemMovieComponent implements OnInit {
  // input
  @Input() movie: any;
  // output
  @Output() eventLike = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  // Truyền movie ra component cha
  like() {
    this.eventLike.emit(this.movie);
  }
}
