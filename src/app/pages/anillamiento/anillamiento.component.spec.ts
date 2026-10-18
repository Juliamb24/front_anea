import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AnillamientoComponent } from './anillamiento.component';

describe('AnillamientoComponent', () => {
  let component: AnillamientoComponent;
  let fixture: ComponentFixture<AnillamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnillamientoComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnillamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
