export interface MDCDataTableRowSelectionChangedEvent {
  index: number;
  id: string | null;
  selected: boolean;
}

export class Examples {
  desserts = [
    { checked: false, name: 'Frozen yogurt', calories: 159, carbs: 24, protein: 4, comment: 'Super tasty' },
    { checked: true, name: 'Ice cream sandwich', calories: 237, carbs: 37, protein: 4.3, comment: 'I like ice cream more' },
    { checked: false, name: 'Eclair', calories: 262, carbs: 16, protein: 6, comment: 'New filling flavor' }
  ];

  selectionChangedEvent: MDCDataTableRowSelectionChangedEvent;
  onSelectionChanged(event: MDCDataTableRowSelectionChangedEvent): void {
    this.selectionChangedEvent = event;
  }

}
