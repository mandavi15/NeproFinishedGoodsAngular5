import { Component } from '@angular/core';

@Component({
    selector: 'app-create-sticker',
    templateUrl: './create-sticker.component.html'
   
})
/** create-sticker component*/
export class CreateStickerComponent {
    /** create-sticker ctor */
    constructor() {

  }

  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 80 },
    { headerName: 'Sticker Code', field: 'stickerCode', sortable: true, filter: true, width: 120 },
    { headerName: 'Sticker For', field: 'stickerFor', sortable: true, filter: true, width: 150 },
    { headerName: 'Stillage / Truck', field: 'stillageTruck', sortable: true, filter: true, width: 150 },
    { headerName: 'Created By', field: 'createdBy', sortable: true, filter: true, width: 150 },
    { headerName: 'Created On', field: 'createdOn', sortable: true, filter: true, width: 110 },
    { headerName: 'Printed By', field: 'printedBy', sortable: true, filter: true, width: 110 },
    { headerName: 'Printed On', field: 'printedOn', sortable: true, filter: true, width: 115 }
  ];

  rowData = [
    { all: " ", checkboxSelection: true, stickerCode: 'SC0001', stickerFor: 'Stillage', stillageTruck: 'Stillage 01', createdBy: 'Fateh Singh', createdOn: '25/12/2018', printedBy: 'Fateh Singh', printedOn:'25/12/2018' },
    { all: " ", checkboxSelection: true, stickerCode: 'SC0002', stickerFor: 'Truck', stillageTruck: 'Truck 01', createdBy: 'Fateh Singh', createdOn: '25/12/2018', printedBy: 'Fateh Singh', printedOn: '25/12/2018'},
    { all: " ", checkboxSelection: true, stickerCode: 'SC0001', stickerFor: 'Stillage', stillageTruck: 'Stillage 01', createdBy: 'Fateh Singh', createdOn: '25/12/2018', printedBy: 'Fateh Singh', printedOn: '25/12/2018' },
    { all: " ", checkboxSelection: true, stickerCode: 'SC0002', stickerFor: 'Truck', stillageTruck: 'Truck 01', createdBy: 'Fateh Singh', createdOn: '25/12/2018', printedBy: 'Fateh Singh', printedOn: '25/12/2018' },
    { all: " ", checkboxSelection: true, stickerCode: 'SC0001', stickerFor: 'Stillage', stillageTruck: 'Stillage 01', createdBy: 'Fateh Singh', createdOn: '25/12/2018', printedBy: 'Fateh Singh', printedOn: '25/12/2018' },
    { all: " ", checkboxSelection: true, stickerCode: 'SC0002', stickerFor: 'Truck', stillageTruck: 'Truck 01', createdBy: 'Fateh Singh', createdOn: '25/12/2018', printedBy: 'Fateh Singh', printedOn: '25/12/2018' }
 
  ];

  columnDefs1 = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 150 },
    { headerName: 'Printed By', field: 'printedBy', sortable: true, filter: true, width: 300 },
    { headerName: 'Printed On', field: 'printedOn', sortable: true, filter: true, width: 300 }
  ];

  rowData1 = [
    { all: " ", checkboxSelection: true, printedBy: 'Fateh Singh', printedOn: '25/12/2018' },
    { all: " ", checkboxSelection: true, printedBy: 'Rahul Singh', printedOn: '25/12/2018' },
    { all: " ", checkboxSelection: true, printedBy: 'Fateh Singh', printedOn: '25/12/2018' },
    { all: " ", checkboxSelection: true, printedBy: 'Fateh Singh', printedOn: '25/12/2018' },
    { all: " ", checkboxSelection: true, printedBy: 'Fateh Singh', printedOn: '25/12/2018' },
    { all: " ", checkboxSelection: true, printedBy: 'Fateh Singh', printedOn: '25/12/2018' }

  ];
  columnDefs2 = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 80 },
    { headerName: 'Item ID', field: 'itemID', sortable: true, filter: true, width: 120 },
    { headerName: 'Quantity', field: 'quantity', sortable: true, filter: true, width: 100 },
    { headerName: 'Unit', field: 'unit', sortable: true, filter: true, width: 80 },
    { headerName: 'Activity By', field: 'activityBy', sortable: true, filter: true, width: 150 },
    { headerName: 'Activity On', field: 'activityOn', sortable: true, filter: true, width: 110 },
    { headerName: 'Location', field: 'location', sortable: true, filter: true, width: 110 },
    { headerName: 'Work Order No.', field: 'workOrderNo', sortable: true, filter: true, width: 115 }
  ];

  rowData2 = [
    { all: " ", checkboxSelection: true, itemID: 'SC0001', quantity: '100', unit: 'Kg', activityBy: 'Fateh Singh', activityOn: '25/12/2018', location: 'Noida', workOrderNo: 'W01' },
    { all: " ", checkboxSelection: true, itemID: 'SC0002', quantity: '1000', unit: 'Kg', activityBy: 'Fateh Singh', activityOn: '25/12/2018', location: 'Gurugram', workOrderNo: 'W02' },
    { all: " ", checkboxSelection: true, itemID: 'SC0001', quantity: '50', unit: 'Kg', activityBy: 'Fateh Singh', activityOn: '25/12/2018', location: 'Agra', workOrderNo: 'W03' },
    { all: " ", checkboxSelection: true, itemID: 'SC0002', quantity: '500', unit: 'Kg', activityBy: 'Fateh Singh', activityOn: '25/12/2018', location: 'Delhi', workOrderNo: 'W04' },
    { all: " ", checkboxSelection: true, itemID: 'SC0001', quantity: '100', unit: 'Kg', activityBy: 'Fateh Singh', activityOn: '25/12/2018', location: 'Faridabad', workOrderNo: 'W05' },
    { all: " ", checkboxSelection: true, itemID: 'SC0002', quantity: '900', unit: 'Kg', activityBy: 'Fateh Singh', activityOn: '25/12/2018', location: 'Noida', workOrderNo: 'W06' }

  ];
}
