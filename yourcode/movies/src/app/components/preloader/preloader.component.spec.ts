import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloaderComponent } from './preloader.component';
import { PreloaderService } from 'src/app/services/preloader/preloader-service';

describe('PreloaderComponent', () => {
  let component: PreloaderComponent;
  let fixture: ComponentFixture<PreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreloaderComponent],
      providers: [PreloaderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
