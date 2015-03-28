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
        { route: ':id',  moduleId: './project',       nav: true},
        { route: 'new',  moduleId: './create', nav: true, title:'Create Project' }
      ]);
    });
  }
}
