import customHtml from '!!raw-loader!./custom.html';
import customSass from '!!raw-loader!./custom.scss';
import customCode from '!!raw-loader!./custom';

export class Examples {
  customHtml = customHtml;
  customSass = customSass;
  customCode = customCode;

  expanded: boolean;
  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  folders = [
    { name: 'Photos', icon: 'folder', addDate: 'Jan 9, 2015' },
    { name: 'Recipes', icon: 'folder', addDate: 'Jan 17, 2015' },
    { name: 'Work', icon: 'folder', addDate: 'Jan 28, 2015' }
  ];

  files = [
    { name: 'Vacation Itinerary', icon: 'insert_drive_file', addDate: 'Jan 10, 2015' },
    { name: 'Kitchen Remodel', icon: 'insert_drive_file', addDate: 'Jan 20, 2015' }
  ];

}