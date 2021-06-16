import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss']
})
export class OnewayBindingComponent implements OnInit {
    fullname: string = "Dung Tuan";
    age: number = 18;
    constructor() { }

    ngOnInit(): void {
    }

    eventBinding(value: string) {
        console.log(value);
        this.fullname = value;
    }
}
