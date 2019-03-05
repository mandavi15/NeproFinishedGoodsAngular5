import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-truck',
    templateUrl: './create-truck.component.html'
   
})
/** create-truck component*/
export class CreateTruckComponent implements OnInit{
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 80 },
    { headerName: 'Vehicle Type', field: 'VehicleType', sortable: true, filter: true, width: 110 },
    { headerName: 'Vehicle Possessed By', field: 'VehiclePossessedBy', sortable: true, filter: true, width: 160 },
    { headerName: 'Vehicle Owner Name', field: 'VehicleOwnerName', sortable: true, filter: true, width: 160 },
    { headerName: 'Registration No.', field: 'RegistrationNo', sortable: true, filter: true, width: 130 },
    { headerName: 'Capacity in Weight (in kg)', field: 'CapacityinWeight', sortable: true, filter: true, width: 200 },
    { headerName: 'Capacity in Volume (in cu)', field: 'CapacityinVolume', sortable: true, filter: true, width: 200 },
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

  constructor(private formbuilder: FormBuilder) { }

  truckForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.truckForm = this.formbuilder.group({
      vehicleType: ['', Validators.required],
      vehiclePossessed: ['', Validators.required],
      vehicleOwnerName: ['', Validators.required],
      registrationNo: ['', Validators.required],
      capacityInWeight: ['', Validators.required],
      capacityInVolume: ['', Validators.required],
      vehicleName: ['', Validators.required]
    });


  }

  truckSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.truckForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.truckForm.value));

  }
  get f() { return this.truckForm.controls; }
}
