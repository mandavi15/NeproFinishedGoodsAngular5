import { Component } from '@angular/core';

@Component({
  selector: 'createAisle',
  templateUrl: './createAisle.component.html',
})
export class CreateAisleComponent {
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
}
