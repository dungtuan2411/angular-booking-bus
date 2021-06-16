import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.scss'],
})
export class TwowayBindingComponent implements OnInit {
  userName: string = 'Cybersoft';

  email: string = '';
  fullName: string = '';
  constructor() {}

  ngOnInit(): void {}

  showName(value: string) {
    this.fullName = value;
  }
}
