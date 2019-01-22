import { Component } from '@angular/core';

@Component({
    selector: 'app-grid-picking-list',
    templateUrl: './grid-picking-list.component.html'
   
})
/** grid-picking-list component*/
export class GridPickingListComponent {
  columnDefs = [
    { headerName: "S.No.",  field: "all", width: 150 },
    { headerName: 'Pick List Number', field: 'PickListNumber', sortable: true, filter: true, width: 280 },
    { headerName: 'Created By', field: 'CreatedBy', sortable: true, filter: true, width: 280 },
    { headerName: 'Created On', field: 'CreatedOn', sortable: true, filter: true, width: 275 },
    { headerName: 'Customer Name', field: 'CustomerName', sortable: true, filter: true, width: 280 },
    { headerName: 'Status', field: 'Status', sortable: true, filter: true, width: 275 }


  ];

  rowData = [
    { all: 1, PickListNumber: 'PL0001', CreatedBy: 'Amar Singh', CreatedOn: '25/12/2018', CustomerName: 'Rahul', Status: 'Created' },
    { all: 2, PickListNumber: 'PL0002', CreatedBy: 'Amar Singh', CreatedOn: '25/12/2018', CustomerName: 'Rahul', Status: 'Created' },
    { all: 3, PickListNumber: 'PL0003', CreatedBy: 'Amar Singh', CreatedOn: '25/12/2018', CustomerName: 'Rahul', Status: 'Created' },
    { all: 4, PickListNumber: 'PL0004', CreatedBy: 'Amar Singh', CreatedOn: '25/12/2018', CustomerName: 'Rahul', Status: 'Created' },
    { all: 5, PickListNumber: 'PL0005', CreatedBy: 'Amar Singh', CreatedOn: '25/12/2018', CustomerName: 'Rahul', Status: 'Created' },
    { all: 6, PickListNumber: 'PL0006', CreatedBy: 'Amar Singh', CreatedOn: '25/12/2018', CustomerName: 'Rahul', Status: 'Created' },
    { all: 7, PickListNumber: 'PL0007', CreatedBy: 'Amar Singh', CreatedOn: '25/12/2018', CustomerName: 'Rahul', Status: 'Created' },
];
}

