import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckcibilscoreComponent } from './checkcibilscore.component';

describe('CheckcibilscoreComponent', () => {
  let component: CheckcibilscoreComponent;
  let fixture: ComponentFixture<CheckcibilscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckcibilscoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckcibilscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
