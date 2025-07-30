import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Epaper } from './epaper';

describe('Epaper', () => {
  let component: Epaper;
  let fixture: ComponentFixture<Epaper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Epaper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Epaper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
