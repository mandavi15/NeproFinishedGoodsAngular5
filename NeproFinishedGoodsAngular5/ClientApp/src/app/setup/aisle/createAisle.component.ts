import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'createAisle',
  templateUrl: './createAisle.component.html',
})
export class CreateAisleComponent implements OnInit {
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 100 },
    { headerName: 'Site', field: 'site', sortable: true, filter: true, width: 220  },
    { headerName: 'WareHouse', field: 'warehouse', sortable: true, filter: true, width: 300  },
    { headerName: 'Aisle', field: 'location', sortable: true, filter: true, width: 282  }
  ];

  rowData = [
    { all: " ", checkboxSelection: true, site: 'Ghaziabad', warehouse: 'Warehouse 1', location: 'Aisle 1' },
    { all: " ", checkboxSelection: true, site: 'Noida', warehouse: 'Warehouse 2', location: 'Aisle 2' },
    { all: " ", checkboxSelection: true, site: 'Delhi', warehouse: 'Warehouse 3', location: 'Aisle 3' },
    { all: " ", checkboxSelection: true, site: 'Gurgaon', warehouse: 'Warehouse 4', location: 'Aisle 4' },
    { all: " ", checkboxSelection: true, site: 'Agra', warehouse: 'Warehouse 5', location: 'Aisle 5' }
  ];

  constructor(private formbuilder: FormBuilder) { }

  aisleForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.aisleForm = this.formbuilder.group({
      aislename: ['', Validators.required],
      site: ['', Validators.required],
      warehouse: ['', Validators.required]
    });


  }
  aisleSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.aisleForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.aisleForm.value));
    
  }
  get f() { return this.aisleForm.controls; }
}
