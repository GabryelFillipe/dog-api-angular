import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizar } from './visualizar';

describe('Visualizar', () => {
  let component: Visualizar;
  let fixture: ComponentFixture<Visualizar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visualizar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visualizar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
