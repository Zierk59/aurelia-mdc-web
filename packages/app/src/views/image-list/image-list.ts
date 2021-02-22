import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ImageListExamples } from './image-list-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'image-list', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: ImageListExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class ImageList extends ComponentViewer { }