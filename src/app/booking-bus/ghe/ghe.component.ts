import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss'],
})
export class GheComponent implements OnInit {
  // Nhận input là những object ghế trong mảng
  @Input() ghe: any;

  @Output() eventChonGhe = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  chonGhe() {
    this.eventChonGhe.emit(this.ghe);
  }
}
