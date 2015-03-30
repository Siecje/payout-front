import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: '',     moduleId: './welcome',      nav: true, title:'Welcome' },
        { route: ':id',  moduleId: './projects/detail',       nav: true},
        { route: 'new',  moduleId: './projects/create', nav: true, title:'Create Project' },
        { route: ':projectId/:issueId',  moduleId: './projects/issue', nav: true, },
        { route: 'login',  moduleId: './login', nav: true, title: 'Login'}
      ]);
    });
  }
}
