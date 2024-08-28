import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarListComponentComponent } from './guitar-list-component.component';

describe('GuitarListComponentComponent', () => {
  let component: GuitarListComponentComponent;
  let fixture: ComponentFixture<GuitarListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuitarListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
