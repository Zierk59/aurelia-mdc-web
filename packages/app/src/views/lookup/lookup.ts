import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { LookupExamples } from './lookup-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'lookup', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: LookupExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class Lookup extends ComponentViewer { }