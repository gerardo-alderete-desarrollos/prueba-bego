import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLeftComponent } from './btn-left.component';

describe('BtnLeftComponent', () => {
  let component: BtnLeftComponent;
  let fixture: ComponentFixture<BtnLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
