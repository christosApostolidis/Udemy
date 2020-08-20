import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaggelisComponent } from './vaggelis.component';

describe('VaggelisComponent', () => {
  let component: VaggelisComponent;
  let fixture: ComponentFixture<VaggelisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaggelisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaggelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
