import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilmeComponent } from './card-filme.component';

describe('CardFilmeComponent', () => {
  let component: CardFilmeComponent;
  let fixture: ComponentFixture<CardFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
