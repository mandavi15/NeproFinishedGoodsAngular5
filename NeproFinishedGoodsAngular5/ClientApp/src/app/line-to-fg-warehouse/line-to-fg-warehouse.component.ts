import { Component } from '@angular/core';

@Component({
    selector: 'app-line-to-fg-warehouse',
    templateUrl: './line-to-fg-warehouse.component.html'
   
})
/** line-to-fg-warehouse component*/
export class LineToFgWarehouseComponent {
    /** line-to-fg-warehouse ctor */
    constructor() {

  }
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 80 },
    { headerName: 'Sticker Code', field: 'stickerCode', sortable: true, filter: true, width: 150 },
    { headerName: 'Work Order No.', field: 'workOrderNo', sortable: true, filter: true, width: 150 },
    { headerName: 'Item', field: 'item', sortable: true, filter: true, width: 100 },
    { headerName: 'Quantity', field: 'quantity', sortable: true, filter: true, width: 100 },
    { headerName: 'Location', field: 'location', sortable: true, filter: true, width: 100 },
    { headerName: 'Created By', field: 'createdBy', sortable: true, filter: true, width: 100 },
    { headerName: 'Created On', field: 'createdOn', sortable: true, filter: true, width: 100 },
    { headerName: 'Submission Time', field: 'submissionTime', sortable: true, filter: true, width: 150 },
    { headerName: 'Drop Time', field: 'dropTime', sortable: true, filter: true, width: 100 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 100 },
    { headerName: 'Total Time', field: 'totalTime', sortable: true, filter: true, width: 150 }

  ];

  rowData = [
    { all: " ", checkboxSelection: true, stickerCode: 'SC0025', workOrderNo: 'Wo-01', item: 'Item 1', quantity: '25', location: 'Location 1', createdBy: 'Rahul', createdOn: '12/12/2018', submissionTime: '5 PM', dropTime: '9 PM', status: 'Created', totalTime: '4 Hrs' },
    { all: " ", checkboxSelection: true, stickerCode: 'SC0026', workOrderNo: 'Wo-02', item: 'Item 2', quantity: '25', location: 'Location 1', createdBy: 'Rahul', createdOn: '12/12/2018', submissionTime: '5 PM', dropTime: '9 PM', status: 'Created', totalTime: '4 Hrs' },
    { all: " ", checkboxSelection: true, stickerCode: 'SC0027', workOrderNo: 'Wo-03', item: 'Item 3', quantity: '25', location: 'Location 1', createdBy: 'Rahul', createdOn: '12/12/2018', submissionTime: '5 PM', dropTime: '9 PM', status: 'Created', totalTime: '4 Hrs' },
    { all: " ", checkboxSelection: true, stickerCode: 'SC0028', workOrderNo: 'Wo-04', item: 'Item 4', quantity: '25', location: 'Location 1', createdBy: 'Rahul', createdOn: '12/12/2018', submissionTime: '5 PM', dropTime: '9 PM', status: 'Created', totalTime: '4 Hrs' },
    { all: " ", checkboxSelection: true, stickerCode: 'SC0029', workOrderNo: 'Wo-05', item: 'Item 5', quantity: '25', location: 'Location 1', createdBy: 'Rahul', createdOn: '12/12/2018', submissionTime: '5 PM', dropTime: '9 PM', status: 'Created', totalTime: '4 Hrs' },
    { all: " ", checkboxSelection: true, stickerCode: 'SC0032', workOrderNo: 'Wo-06', item: 'Item 6', quantity: '25', location: 'Location 1', createdBy: 'Rahul', createdOn: '12/12/2018', submissionTime: '5 PM', dropTime: '9 PM', status: 'Created', totalTime: '4 Hrs' },
    { all: " ", checkboxSelection: true, stickerCode: 'SC0035', workOrderNo: 'Wo-07', item: 'Item 7', quantity: '25', location: 'Location 1', createdBy: 'Rahul', createdOn: '12/12/2018', submissionTime: '5 PM', dropTime: '9 PM', status: 'Created', totalTime: '4 Hrs' },
  ];
}
