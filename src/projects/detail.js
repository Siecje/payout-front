import {API} from '../api';

export class Project{
  static inject() { return [API]; }
  constructor(API){
    this.API = API;
    this.project = {};
  }

  activate(params){
    return this.API.getProject(params.id).then(response => {
      this.project = response.content;
    });
  }

}
