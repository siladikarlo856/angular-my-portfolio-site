import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../project-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects; // create type for project

  constructor(
    private projectData: ProjectDataService
    ) { 
      this.projects = this.projectData.getProjects();
    }

  ngOnInit(): void {
  }

}
