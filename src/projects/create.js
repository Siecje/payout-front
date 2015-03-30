import {API} from '../api';
import {Router} from 'aurelia-router';

export class CreateProject{
  static inject() { return [API, Router]; }

  constructor(API, router){
    this.API = API;
    this.router = router;
    this.project = {};
  }

  createProject(){
    // TODO: why does it send two requests the first one 400
    this.API.saveProject(this.project).then(function(){
      console.log('here');
      this.router.navigate('/');
    });
  }

}
