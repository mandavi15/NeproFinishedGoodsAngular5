import { Component } from '@angular/core';

@Component({
    selector: 'app-role-assignment',
    templateUrl: './role-assignment.component.html'
   
})
/** role-assignment component*/
export class RoleAssignmentComponent {
    /** role-assignment ctor */
    constructor() {

  }
  public data: any[] = [
    {
      text: 'Furniture', items: [
        { text: 'Tables & Chairs' },
        { text: 'Sofas' },
        { text: 'Occasional Furniture' }
      ]
    },
    {
      text: 'Decor', items: [
        { text: 'Bed Linen' },
        { text: 'Curtains & Blinds' },
        { text: 'Carpets' }
      ]
    }
  ];
}
