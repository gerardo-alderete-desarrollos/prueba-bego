import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCompleteComponent } from './btn-complete.component';

describe('BtnCompleteComponent', () => {
  let component: BtnCompleteComponent;
  let fixture: ComponentFixture<BtnCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnCompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
