import defaultHtml from '!!raw-loader!./default.html';
import defaultSass from '!!raw-loader!./default.scss';

import densityHtml from '!!raw-loader!./density.html';
import densitySass from '!!raw-loader!./density.scss';

import iconHtml from '!!raw-loader!./icon.html';
import iconSass from '!!raw-loader!./icon.scss';

import svgHtml from '!!raw-loader!./svg-example.html';

import themeHtml from '!!raw-loader!./theme.html';
import themeSass from '!!raw-loader!./theme.scss';

import shapedHtml from '!!raw-loader!./shaped.html';
import shapedSass from '!!raw-loader!./shaped.scss';

import trailingHtml from '!!raw-loader!./trailing.html';
import trailingSass from '!!raw-loader!./trailing.scss';

import accessibilityHtml from '!!raw-loader!./accessibility.html';

import * as Default from './default.html';
import * as density from './density.html';
import * as  icon from './icon.html';
import * as  accessibility from './accessibility.html';
import * as  theme from './theme.html';
import * as  trailing from './trailing.html';
import * as  svgExample from './svg-example.html';
import * as  shaped from './shaped.html';
import { route } from 'aurelia';

@route({ path: 'examples' })
export class ButtonExamples {
  accessibility = accessibility;
  default = Default;
  density = density;
  icon = icon;
  shaped = shaped;
  svgExample = svgExample;
  theme = theme;
  trailing = trailing;

  defaultHtml = defaultHtml;
  defaultSass = defaultSass;

  densityHtml = densityHtml;
  densitySass = densitySass;

  iconHtml = iconHtml;
  iconSass = iconSass;

  svgHtml = svgHtml;

  themeHtml = themeHtml;
  themeSass = themeSass;

  shapedHtml = shapedHtml;
  shapedSass = shapedSass;

  trailingHtml = trailingHtml;
  trailingSass = trailingSass;

  accessibilityHtml = accessibilityHtml;
}
