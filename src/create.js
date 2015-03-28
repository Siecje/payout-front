import {API} from './api';

export class CreateProject{
  static inject() { return [API]; }

  constructor(API){
    this.API = API;
    this.project = {};
  }

  createProject(){
    this.API.saveProject(this.project);
  }

}
