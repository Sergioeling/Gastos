import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPageInicio } from './web-page-inicio';

describe('WebPageInicio', () => {
  let component: WebPageInicio;
  let fixture: ComponentFixture<WebPageInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebPageInicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebPageInicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
