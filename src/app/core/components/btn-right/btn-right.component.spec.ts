import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRightComponent } from './btn-right.component';

describe('BtnRightComponent', () => {
  let component: BtnRightComponent;
  let fixture: ComponentFixture<BtnRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
