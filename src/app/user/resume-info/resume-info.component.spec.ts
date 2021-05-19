import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInfoComponent } from './resume-info.component';

describe('ResumeInfoComponent', () => {
  let component: ResumeInfoComponent;
  let fixture: ComponentFixture<ResumeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
