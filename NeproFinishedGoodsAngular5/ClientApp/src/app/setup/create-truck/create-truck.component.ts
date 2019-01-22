import { Component } from '@angular/core';

@Component({
    selector: 'app-create-truck',
    templateUrl: './create-truck.component.html'
   
})
/** create-truck component*/
export class CreateTruckComponent {
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 150 },
    { headerName: 'Vehicle Type', field: 'VehicleType', sortable: true, filter: true, width: 200 },
    { headerName: 'Vehicle Possessed By', field: 'VehiclePossessedBy', sortable: true, filter: true, width: 200 },
    { headerName: 'Vehicle Owner Name', field: 'VehicleOwnerName', sortable: true, filter: true, width: 200 },
    { headerName: 'Registration No.', field: 'RegistrationNo', sortable: true, filter: true, width: 200 },
    { headerName: 'Capacity in Weight', field: 'CapacityinWeight', sortable: true, filter: true, width: 200 },
    { headerName: 'Capacity in Volume', field: 'CapacityinVolume', sortable: true, filter: true, width: 200 },
    { headerName: 'Vehicle Name', field: 'VehicleName', sortable: true, filter: true, width: 200 }

  ];

  rowData = [
    { all: " ", checkboxSelection: true, VehicleType: 'Truck', VehiclePossessedBy: 'Third Party', VehicleOwnerName: 'Amar Singh', RegistrationNo: '654560345', CapacityinWeight: '20000', CapacityinVolume: '20000', VehicleName: 'Name 1' },
    { all: " ", checkboxSelection: true, VehicleType: 'Truck', VehiclePossessedBy: 'Third Party', VehicleOwnerName: 'Amar Singh', RegistrationNo: '654560345', CapacityinWeight: '20000', CapacityinVolume: '20000', VehicleName: 'Name 1' },
    { all: " ", checkboxSelection: true, VehicleType: 'Truck', VehiclePossessedBy: 'Third Party', VehicleOwnerName: 'Amar Singh', RegistrationNo: '654560345', CapacityinWeight: '20000', CapacityinVolume: '20000', VehicleName: 'Name 1' },
    { all: " ", checkboxSelection: true, VehicleType: 'Truck', VehiclePossessedBy: 'Third Party', VehicleOwnerName: 'Amar Singh', RegistrationNo: '654560345', CapacityinWeight: '20000', CapacityinVolume: '20000', VehicleName: 'Name 1' },
    { all: " ", checkboxSelection: true, VehicleType: 'Truck', VehiclePossessedBy: 'Third Party', VehicleOwnerName: 'Amar Singh', RegistrationNo: '654560345', CapacityinWeight: '20000', CapacityinVolume: '20000', VehicleName: 'Name 1' },
    { all: " ", checkboxSelection: true, VehicleType: 'Truck', VehiclePossessedBy: 'Third Party', VehicleOwnerName: 'Amar Singh', RegistrationNo: '654560345', CapacityinWeight: '20000', CapacityinVolume: '20000', VehicleName: 'Name 1' },
    { all: " ", checkboxSelection: true, VehicleType: 'Truck', VehiclePossessedBy: 'Third Party', VehicleOwnerName: 'Amar Singh', RegistrationNo: '654560345', CapacityinWeight: '20000', CapacityinVolume: '20000', VehicleName: 'Name 1' },
  ];
}
