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
    { headerName: 'S.No.', field: 'site', sortable: true, filter: true, width: 418 },
    { headerName: 'All Vehicle Type', field: 'AllVehicleType', sortable: true, filter: true, width: 420 }
   
  ];

  rowData = [
    { all: " ", checkboxSelection: true, site: 'Ghaziabad', AllVehicleType: 'Van' },
    { all: " ", checkboxSelection: true, site: 'Noida', AllVehicleType: 'Truck'},
    { all: " ", checkboxSelection: true, site: 'Delhi', AllVehicleType: 'Mini Truck' },
    { all: " ", checkboxSelection: true, site: 'Gurgaon', AllVehicleType: 'Truck' },
    { all: " ", checkboxSelection: true, site: 'Agra', AllVehicleType: 'Van' }
  ];
}
