import template from '../component-viewer/component-viewer.html';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';

@customElement({ name: 'circular-progress-page', template })
export class CircularProgress extends ComponentViewer { }
