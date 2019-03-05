import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-create-rack',
    templateUrl: './create-rack.component.html',
})
/** create-rack component*/
export class CreateRackComponent implements OnInit {
  
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 100 },
    { headerName: 'Site', field: 'site', sortable: true, filter: true, width: 200 },
    { headerName: 'WareHouse', field: 'warehouse', sortable: true, filter: true, width: 200 },
    { headerName: 'Aisle', field: 'location', sortable: true, filter: true, width: 230 },
    { headerName: 'Rack', field: 'rowname', sortable: true, filter: true, width: 230 }
  ];

  rowData = [
    { all: " ", checkboxSelection: true, site: 'Ghaziabad', warehouse: 'Warehouse 1', location: 'Aisle 1', rowname:'Rack 1'},
    { all: " ", checkboxSelection: true, site: 'Noida', warehouse: 'Warehouse 2', location: 'Aisle 2', rowname: 'Rack 2'},
    { all: " ", checkboxSelection: true, site: 'Delhi', warehouse: 'Warehouse 3', location: 'Aisle 3', rowname: 'Rack 3'},
    { all: " ", checkboxSelection: true, site: 'Gurgaon', warehouse: 'Warehouse 4', location: 'Aisle 4', rowname: 'Rack 4'},
    { all: " ", checkboxSelection: true, site: 'Agra', warehouse: 'Warehouse 5', location: 'Aisle 5', rowname: 'Rack 5'}
  ];

  constructor(private formbuilder: FormBuilder) { }

  rackForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.rackForm = this.formbuilder.group({
      aislename: ['', Validators.required],
      site: ['', Validators.required],
      warehouse: ['', Validators.required],
      rack: ['', Validators.required]
    });


  }

  rackSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.rackForm.invalid) {
      return;
    }
 
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.rackForm.value));

  }
  get f() { return this.rackForm.controls; }
}
