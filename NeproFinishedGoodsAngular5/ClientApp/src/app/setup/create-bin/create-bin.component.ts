import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-bin',
    templateUrl: './create-bin.component.html'
    //styleUrls: ['./create-bin.component.css']
})
/** create-bin component*/
export class CreateBinComponent implements OnInit {
   
  columnDefs = [
    { headerName: "All", checkboxSelection: true,  field: "all", width: 90 },
    { headerName: 'Site', field: 'site', sortable: true, filter: true, width: 180 },
    { headerName: 'WareHouse', field: 'warehouse', sortable: true, filter: true, width: 180 },
    { headerName: 'Aisle', field: 'location', sortable: true, filter: true, width: 180 },
    { headerName: 'Rack', field: 'RowName', sortable: true, filter: true, width: 180 },
    { headerName: 'Bin', field: 'BinName', sortable: true, filter: true, width: 175 },
    
  ];

  rowData = [
    { all: " ", checkboxSelection: true, site: 'Ghaziabad', warehouse: 'Warehouse 1', location: 'Aisle 1', RowName: 'Rack 1', BinName:'Bin 1' },
    { all: " ", checkboxSelection: true, site: 'Noida', warehouse: 'Warehouse 2', location: 'Aisle 2', RowName: 'Rack 2', BinName: 'Bin 2' },
    { all: " ", checkboxSelection: true, site: 'Delhi', warehouse: 'Warehouse 3', location: 'Aisle 3', RowName: 'Rack 3', BinName: 'Bin 3' },
    { all: " ", checkboxSelection: true, site: 'Gurgaon', warehouse: 'Warehouse 4', location: 'Aisle 4', RowName: 'Rack 4', BinName: 'Bin 4' },
    { all: " ", checkboxSelection: true, site: 'Agra', warehouse: 'Warehouse 5', location: 'Aisle 5', RowName: 'Rack 5', BinName: 'Bin 5' }
  ];


  constructor(private formbuilder: FormBuilder) { }

  binForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.binForm = this.formbuilder.group({
      aislename: ['', Validators.required],
      site: ['', Validators.required],
      warehouse: ['', Validators.required],
      rack: ['', Validators.required],
      bin: ['', Validators.required]
    });


  }

  binSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.binForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.binForm.value));

  }
  get f() { return this.binForm.controls; }
}

