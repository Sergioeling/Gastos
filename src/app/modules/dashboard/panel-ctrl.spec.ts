import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCtrl } from './panel-ctrl';

describe('PanelCtrl', () => {
  let component: PanelCtrl;
  let fixture: ComponentFixture<PanelCtrl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelCtrl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCtrl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
