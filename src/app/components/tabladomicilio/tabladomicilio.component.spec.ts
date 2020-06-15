import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabladomicilioComponent } from './tabladomicilio.component';

describe('TabladomicilioComponent', () => {
  let component: TabladomicilioComponent;
  let fixture: ComponentFixture<TabladomicilioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabladomicilioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabladomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
