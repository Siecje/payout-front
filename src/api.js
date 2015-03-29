import {HttpClient} from 'aurelia-http-client';

export class API {
  static inject() { return [HttpClient]; }
  constructor(http){
    this.http = http;
    this.http.configure(x => {
      x.withBaseUri('http://localhost:8000/api/');
      x.withHeader('Authorization', 'Basic ' + btoa('cody:cody'));
      x.withHeader('Content-Type', 'application/json');
      x.withHeader('Accept', 'application/json');
    });
  }

  getAllProjects(){
    return this.http.get('projects');
  }

  getProject(id){
    return this.http.get(`projects/${id}`);
  }

  saveProject(project){
    if(project.id){
      return this.http.put('projects/' + project.id, project);
    }
    else{
      // TODO: use current user or use authenticated user of request
      project.creator = 1;
      return this.http.post('projects', project);
    }
  }
}
