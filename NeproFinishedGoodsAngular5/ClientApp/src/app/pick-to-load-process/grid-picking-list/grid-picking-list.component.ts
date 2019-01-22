import { Component } from '@angular/core';

@Component({
    selector: 'app-grid-picking-list',
    templateUrl: './grid-picking-list.component.html'
   
})
/** grid-picking-list component*/
export class GridPickingListComponent {
  columnDefs = [
    { headerName: "S.No.",  field: "all", width: 150 },
    { headerName: 'Pick List Number', field: 'PickListNumber', sortable: true, filter: true, width: 200 },
    { headerName: 'Created By', field: 'CreatedBy', sortable: true, filter: true, width: 150 },
    { headerName: 'Created On', field: 'CreatedOn', sortable: true, filter: true, width: 150 },
    { headerName: 'Customer Name', field: 'CustomerName', sortable: true, filter: true, width: 200 },
    { headerName: 'Status', field: 'Status', sortable: true, filter: true, width: 135 }


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

  salesorder1columnDefs = [
    { headerName: "S.No.", field: "all", width: 150 },
    { headerName: 'Item', field: 'Item', sortable: true, filter: true, width: 150 },
    { headerName: 'Item Description', field: 'ItemDescription', sortable: true, filter: true, width: 170 },
    { headerName: 'Remaining Quantity', field: 'RemainingQuantity', sortable: true, filter: true, width: 150 },
    { headerName: 'Unit', field: 'Unit', sortable: true, filter: true, width: 150},
    { headerName: 'To Be Delivered Quantity', field: 'ToBeDeliveredQuantity', sortable: true, filter: true, width: 215, template: "<input class='k-textbox'/>" }


  ];

  salesorder1rowData = [
    { all: 1, Item: 'Item 1', ItemDescription: 'Item 1 Description', RemainingQuantity: '20', Unit: 'Kg' },
    { all: 2, Item: 'Item 2', ItemDescription: 'Item 2 Description', RemainingQuantity: '20', Unit: 'Kg'},
    { all: 3, Item: 'Item 3', ItemDescription: 'Item 3 Description', RemainingQuantity: '20', Unit: 'Kg'},
    { all: 4, Item: 'Item 4', ItemDescription: 'Item 4 Description', RemainingQuantity: '20', Unit: 'Kg' },
    { all: 5, Item: 'Item 5', ItemDescription: 'Item 5 Description', RemainingQuantity: '20', Unit: 'Kg'},
    { all: 6, Item: 'Item 6', ItemDescription: 'Item 6 Description', RemainingQuantity: '20', Unit: 'Kg'},
    { all: 7, Item: 'Item 7', ItemDescription: 'Item 7 Description', RemainingQuantity: '20', Unit: 'Kg' },
    { all: 8, Item: 'Item 8', ItemDescription: 'Item 8 Description', RemainingQuantity: '20', Unit: 'Kg' },
    { all: 9, Item: 'Item 9', ItemDescription: 'Item 9 Description', RemainingQuantity: '20', Unit: 'Kg' },

  ];

  salesorder2columnDefs = [
    { headerName: "S.No.", field: "all", width: 150 },
    { headerName: 'Item', field: 'Item', sortable: true, filter: true, width: 150 },
    { headerName: 'Item Description', field: 'ItemDescription', sortable: true, filter: true, width: 170 },
    { headerName: 'Remaining Quantity', field: 'RemainingQuantity', sortable: true, filter: true, width: 150 },
    { headerName: 'Unit', field: 'Unit', sortable: true, filter: true, width: 150 },
    { headerName: 'To Be Delivered Quantity', field: 'ToBeDeliveredQuantity', sortable: true, filter: true, width: 215 }


  ];

  salesorder2rowData = [
    { all: 1, Item: 'Item 1', ItemDescription: 'Item 1 Description', RemainingQuantity: '20', Unit: 'Kg', ToBeDeliveredQuantity: '<input type="text" />' },
    { all: 2, Item: 'Item 2', ItemDescription: 'Item 2 Description', RemainingQuantity: '20', Unit: 'Kg', ToBeDeliveredQuantity: '<input type="text" />' },
    { all: 3, Item: 'Item 3', ItemDescription: 'Item 3 Description', RemainingQuantity: '20', Unit: 'Kg', ToBeDeliveredQuantity: '<input type="text" />' },
    { all: 4, Item: 'Item 4', ItemDescription: 'Item 4 Description', RemainingQuantity: '20', Unit: 'Kg', ToBeDeliveredQuantity: '<input type="text" />' },
    { all: 5, Item: 'Item 5', ItemDescription: 'Item 5 Description', RemainingQuantity: '20', Unit: 'Kg', ToBeDeliveredQuantity: '<input type="text" />' },
    { all: 6, Item: 'Item 6', ItemDescription: 'Item 6 Description', RemainingQuantity: '20', Unit: 'Kg', ToBeDeliveredQuantity: '<input type="text" />' },
    { all: 7, Item: 'Item 7', ItemDescription: 'Item 7 Description', RemainingQuantity: '20', Unit: 'Kg', ToBeDeliveredQuantity: '<input type="text" />' },
    { all: 8, Item: 'Item 8', ItemDescription: 'Item 8 Description', RemainingQuantity: '20', Unit: 'Kg', ToBeDeliveredQuantity: '<input type="text" />' },
    { all: 9, Item: 'Item 9', ItemDescription: 'Item 9 Description', RemainingQuantity: '20', Unit: 'Kg', ToBeDeliveredQuantity: '<input type="text" />' },

  ];






}

