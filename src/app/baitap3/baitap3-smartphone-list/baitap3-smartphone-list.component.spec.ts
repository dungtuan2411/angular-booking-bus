import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3SmartphoneListComponent } from './baitap3-smartphone-list.component';

describe('Baitap3SmartphoneListComponent', () => {
  let component: Baitap3SmartphoneListComponent;
  let fixture: ComponentFixture<Baitap3SmartphoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap3SmartphoneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3SmartphoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
