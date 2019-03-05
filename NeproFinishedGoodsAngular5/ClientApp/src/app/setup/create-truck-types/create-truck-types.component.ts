import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-truck-types',
    templateUrl: './create-truck-types.component.html'
    //styleUrls: ['./create-truck-types.component.css']
})
/** create-truck-types component*/
export class CreateTruckTypesComponent implements OnInit {
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

  constructor(private formbuilder: FormBuilder) { }

  vehicleTypeForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.vehicleTypeForm = this.formbuilder.group({
      vehicleType: ['', Validators.required]
    });


  }

  vehicleTypeSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.vehicleTypeForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.vehicleTypeForm.value));

  }
  get f() { return this.vehicleTypeForm.controls; }
}
