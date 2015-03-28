import {HttpClient} from 'aurelia-http-client';

export class API {
  static inject() { return [HttpClient]; }
  constructor(http){
    this.http = http;
    this.http.configure(x => {
      x.withBaseUri('http://localhost:8000/api/');
      x.withHeader('Authorization', 'Basic ' + btoa('cody:cody'));
      //x.withHeader('Content-Type', 'application/json');
      // x.withResponseType('application/json');
    });
  }

  getAllProjects(){
    // TODO: default should be JSON
    return this.http.get('projects?format=json');
  }

  getProject(id){
    return this.http.get(`projects/${id}?format=json`);
  }

  saveProject(project){
    if(project.id){
      return this.http.put('projects/' + project.id, project);
    }
    else{
      return this.http.post('projects', project);
    }
  }
}
