import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSectionComponent } from './web-section.component';

describe('WebSectionComponent', () => {
  let component: WebSectionComponent;
  let fixture: ComponentFixture<WebSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebSectionComponent]
    });
    fixture = TestBed.createComponent(WebSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
