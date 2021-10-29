import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor() { }

  getProjects() {
    return [
      {
        name: "Project 1 name",
        image: "Project 1 image url",
        gitUrl: "Project 1 git url",
        demoUrl: "Project 1 demo url",
      },
      {
        name: "Project 2 name",
        image: "Project 2 image url",
        gitUrl: "Project 2 git url",
        demoUrl: "Project 2 demo url",
      },
      {
        name: "Project 3 name",
        image: "Project 3 image url",
        gitUrl: "Project 3 git url",
        demoUrl: "Project 3 demo url",
      },
    ];
  }
}
