import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { FormFieldExamples } from './form-field-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'form-field', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: FormFieldExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class FormField extends ComponentViewer { }