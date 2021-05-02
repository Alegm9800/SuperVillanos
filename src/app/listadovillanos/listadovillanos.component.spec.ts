import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadovillanosComponent } from './listadovillanos.component';

describe('ListadovillanosComponent', () => {
  let component: ListadovillanosComponent;
  let fixture: ComponentFixture<ListadovillanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadovillanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadovillanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
