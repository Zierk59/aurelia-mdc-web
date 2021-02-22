import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ListExamples } from './list-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'list', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: ListExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class List extends ComponentViewer { }