import { IContainer } from '@aurelia/kernel';
import { MdcTabBar } from './mdc-tab-bar';
import { MdcTab, IMdcTabElement } from './tab/mdc-tab';
import { MdcTabScroller } from './scroller/mdc-tab-scroller';
import { MdcTabIndicator } from './indicator/mdc-tab-indicator';

export { MdcTabBar, MdcTab, IMdcTabElement, MdcTabScroller, MdcTabIndicator };

export const TabBarConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcTabBar, MdcTab, MdcTabScroller, MdcTabIndicator);
  }
};