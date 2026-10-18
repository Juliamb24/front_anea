import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders native detail links and a gallery for each project', () => {
    const detailLinks = fixture.nativeElement.querySelectorAll('.proyecto-btn');
    const dialogs = fixture.nativeElement.querySelectorAll('[role="dialog"]');

    expect(detailLinks.length).toBe(component.proyectos.length);
    expect(dialogs.length).toBe(component.proyectos.length);

    component.proyectos.forEach((project, index) => {
      expect(detailLinks[index].getAttribute('href')).toBe(`/proyectos#detalle-proyecto-${index}`);
      expect(dialogs[index].querySelectorAll('.modal-thumbnail').length).toBe(project.imagenes.length);
      expect(dialogs[index].querySelector('h2').textContent.trim()).toBe(project.titulo);
    });
  });
});
