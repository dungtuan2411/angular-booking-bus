import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent implements OnInit {
  dssv: any = [
    { ten: 'Nguyen', tuoi: 15 },
    { ten: 'Phu', tuoi: 26 },
    { ten: 'Teo', tuoi: 20 },
    { ten: 'Ti', tuoi: 25 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
