import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motorsport } from './motorsport';

describe('Motorsport', () => {
  let component: Motorsport;
  let fixture: ComponentFixture<Motorsport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Motorsport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Motorsport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
