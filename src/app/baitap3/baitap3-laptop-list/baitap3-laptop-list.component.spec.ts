import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3LaptopListComponent } from './baitap3-laptop-list.component';

describe('Baitap3LaptopListComponent', () => {
  let component: Baitap3LaptopListComponent;
  let fixture: ComponentFixture<Baitap3LaptopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap3LaptopListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3LaptopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
