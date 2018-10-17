import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsEventsComponent } from './projects-events.component';

describe('ProjectsEventsComponent', () => {
  let component: ProjectsEventsComponent;
  let fixture: ComponentFixture<ProjectsEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
