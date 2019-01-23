import { Component } from '@angular/core';

@Component({
    selector: 'app-stillage-to-stillage',
    templateUrl: './stillage-to-stillage.component.html'
   
})
/** stillage-to-stillage component*/
export class StillageToStillageComponent {
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 120 },
    { headerName: 'Truck Card Number', field: 'TruckCardNumber', sortable: true, filter: true, width: 150 },
    { headerName: 'Truck Number', field: 'TruckNumber', sortable: true, filter: true, width: 125 },
    { headerName: 'Driver Name', field: 'DriverName', sortable: true, filter: true, width: 120 },
    { headerName: 'Picking List Number', field: 'PickingListNumber', sortable: true, filter: true, width: 200 },
    { headerName: 'Item Count', field: 'ItemCount', sortable: true, filter: true, width: 135 },
    { headerName: 'Loading Quantity', field: 'LoadingQuantity', sortable: true, filter: true, width: 135 }


  ];

  rowData = [
    { all: '', TruckCardNumber: 'Truck CR01', TruckNumber: 'UP-14-BD-5468', DriverName: 'Amar', PickingListNumber: 'Pl 001', ItemCount: '100', LoadingQuantity: '100' },
    { all: '', TruckCardNumber: 'Truck CR02', TruckNumber: 'UP-14-BD-5468', DriverName: 'Amar', PickingListNumber: 'Pl 001', ItemCount: '100', LoadingQuantity: '100' },
    { all: '', TruckCardNumber: 'Truck CR03', TruckNumber: 'UP-14-BD-5468', DriverName: 'Amar', PickingListNumber: 'Pl 001', ItemCount: '100', LoadingQuantity: '100' },
    { all: '', TruckCardNumber: 'Truck CR04', TruckNumber: 'UP-14-BD-5468', DriverName: 'Amar', PickingListNumber: 'Pl 001', ItemCount: '100', LoadingQuantity: '100' },
    { all: '', TruckCardNumber: 'Truck CR05', TruckNumber: 'UP-14-BD-5468', DriverName: 'Amar', PickingListNumber: 'Pl 001', ItemCount: '100', LoadingQuantity: '100' },
    { all: '', TruckCardNumber: 'Truck CR06', TruckNumber: 'UP-14-BD-5468', DriverName: 'Amar', PickingListNumber: 'Pl 001', ItemCount: '100', LoadingQuantity: '100' },
    { all: '', TruckCardNumber: 'Truck CR07', TruckNumber: 'UP-14-BD-5468', DriverName: 'Amar', PickingListNumber: 'Pl 001', ItemCount: '100', LoadingQuantity: '100' },
  ];
}
