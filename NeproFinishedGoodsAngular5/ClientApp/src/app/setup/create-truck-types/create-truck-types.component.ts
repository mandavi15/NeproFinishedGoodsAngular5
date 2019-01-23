import { Component } from '@angular/core';

@Component({
    selector: 'app-create-truck-types',
    templateUrl: './create-truck-types.component.html'
    //styleUrls: ['./create-truck-types.component.css']
})
/** create-truck-types component*/
export class CreateTruckTypesComponent {
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 150 },
    { headerName: 'S.No.', field: 'sno', sortable: true, filter: true, width: 418 },
    { headerName: 'All Vehicle Type', field: 'AllVehicleType', sortable: true, filter: true, width: 420 }
   
  ];

  rowData = [
    { all: " ", checkboxSelection: true, sno: '1.', AllVehicleType: 'Van' },
    { all: " ", checkboxSelection: true, sno: '2.', AllVehicleType: 'Truck'},
    { all: " ", checkboxSelection: true, sno: '3.', AllVehicleType: 'Mini Truck' },
    { all: " ", checkboxSelection: true, sno: '4.', AllVehicleType: 'Truck' },
    { all: " ", checkboxSelection: true, sno: '5.', AllVehicleType: 'Van' }
  ];
}
