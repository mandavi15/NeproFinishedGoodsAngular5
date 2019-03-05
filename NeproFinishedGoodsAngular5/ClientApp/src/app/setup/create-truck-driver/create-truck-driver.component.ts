import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-truck-driver',
    templateUrl: './create-truck-driver.component.html'
  
})
/** create-truck-driver component*/
export class CreateTruckDriverComponent implements OnInit {
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 80 },
    { headerName: 'Transporter Name', field: 'TransporterName', sortable: true, filter: true, width: 150 },
    { headerName: 'Truck Number', field: 'TruckNumber', sortable: true, filter: true, width: 150 },
    { headerName: 'Driver ID', field: 'DriverID', sortable: true, filter: true, width: 100 },
    { headerName: 'Driver Name', field: 'DriverName', sortable: true, filter: true, width: 120 },
    { headerName: 'Contact Number', field: 'ContactNumber', sortable: true, filter: true, width: 150 },
    { headerName: 'Email ID', field: 'EmailID', sortable: true, filter: true, width: 120 },
    { headerName: 'Address', field: 'Address', sortable: true, filter: true, width: 200 }

  ];

  rowData = [
    { all: " ", checkboxSelection: true, TransporterName: 'Amar Singh', TruckNumber: 'UP-14-BZ-5846', DriverID: 'SC0001', DriverName: 'Rahul', ContactNumber: '8459267584', EmailID: 'abc@gmail.com', Address:'E-210, Second Floor' },
    { all: " ", checkboxSelection: true, TransporterName: 'Amar Singh', TruckNumber: 'UP-14-BZ-5846', DriverID: 'SC0001', DriverName: 'Rahul', ContactNumber: '8459267584', EmailID: 'abc@gmail.com', Address: 'E-210, Second Floor' },
    { all: " ", checkboxSelection: true, TransporterName: 'Amar Singh', TruckNumber: 'UP-14-BZ-5846', DriverID: 'SC0001', DriverName: 'Rahul', ContactNumber: '8459267584', EmailID: 'abc@gmail.com', Address: 'E-210, Second Floor' },
    { all: " ", checkboxSelection: true, TransporterName: 'Amar Singh', TruckNumber: 'UP-14-BZ-5846', DriverID: 'SC0001', DriverName: 'Rahul', ContactNumber: '8459267584', EmailID: 'abc@gmail.com', Address: 'E-210, Second Floor' },
    { all: " ", checkboxSelection: true, TransporterName: 'Amar Singh', TruckNumber: 'UP-14-BZ-5846', DriverID: 'SC0001', DriverName: 'Rahul', ContactNumber: '8459267584', EmailID: 'abc@gmail.com', Address: 'E-210, Second Floor' },
  ];

  constructor(private formbuilder: FormBuilder) { }

  truckDriverForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.truckDriverForm = this.formbuilder.group({
      transportName: ['', Validators.required],
      truckNo: ['', Validators.required],
      driverID: ['', Validators.required],
      driverName: ['', Validators.required],
      contactNo: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required]
    });


  }

  truckDriverSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.truckDriverForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.truckDriverForm.value));

  }
  get f() { return this.truckDriverForm.controls; }
}
