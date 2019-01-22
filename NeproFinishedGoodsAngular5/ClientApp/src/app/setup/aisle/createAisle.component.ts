import { Component } from '@angular/core';

@Component({
  selector: 'createAisle',
  templateUrl: './createAisle.component.html',
})
export class CreateAisleComponent {

  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 100 },
    { headerName: 'Site', field: 'site', sortable: true, filter: true, width: 300  },
    { headerName: 'WareHouse', field: 'warehouse', sortable: true, filter: true, width: 300  },
    { headerName: 'Location', field: 'location', sortable: true, filter: true, width: 282  }
  ];

  rowData = [
    { all: " ", checkboxSelection: true, site: 'Ghaziabad', warehouse: 'Warehouse 1', location: 'Location 1' },
    { all: " ", checkboxSelection: true, site: 'Noida', warehouse: 'Warehouse 2', location: 'Location 2' },
    { all: " ", checkboxSelection: true, site: 'Delhi', warehouse: 'Warehouse 3', location: 'Location 3' },
    { all: " ", checkboxSelection: true, site: 'Gurgaon', warehouse: 'Warehouse 4', location: 'Location 4' },
    { all: " ", checkboxSelection: true, site: 'Agra', warehouse: 'Warehouse 5', location: 'Location 5' }
  ];
}
