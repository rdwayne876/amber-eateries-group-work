import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideOrderModalComponent } from './side-order-modal.component';

describe('SideOrderModalComponent', () => {
  let component: SideOrderModalComponent;
  let fixture: ComponentFixture<SideOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideOrderModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
