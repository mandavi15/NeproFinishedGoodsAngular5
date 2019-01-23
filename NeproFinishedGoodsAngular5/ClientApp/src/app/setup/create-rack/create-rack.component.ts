import { Component } from '@angular/core';

@Component({
    selector: 'app-create-rack',
    templateUrl: './create-rack.component.html',
    styleUrls: ['./create-rack.component.css']
})
/** create-rack component*/
export class CreateRackComponent {
    /** create-rack ctor */
    constructor() {

  }
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 100 },
    { headerName: 'Site', field: 'site', sortable: true, filter: true, width: 200 },
    { headerName: 'WareHouse', field: 'warehouse', sortable: true, filter: true, width: 200 },
    { headerName: 'Aisle', field: 'location', sortable: true, filter: true, width: 240 },
    { headerName: 'Rack', field: 'rowname', sortable: true, filter: true, width: 245 }
  ];

  rowData = [
    { all: " ", checkboxSelection: true, site: 'Ghaziabad', warehouse: 'Warehouse 1', location: 'Aisle 1', rowname:'Rack 1' },
    { all: " ", checkboxSelection: true, site: 'Noida', warehouse: 'Warehouse 2', location: 'Aisle 2', rowname: 'Rack 2' },
    { all: " ", checkboxSelection: true, site: 'Delhi', warehouse: 'Warehouse 3', location: 'Aisle 3', rowname: 'Rack 3' },
    { all: " ", checkboxSelection: true, site: 'Gurgaon', warehouse: 'Warehouse 4', location: 'Aisle 4', rowname: 'Rack 4' },
    { all: " ", checkboxSelection: true, site: 'Agra', warehouse: 'Warehouse 5', location: 'Aisle 5', rowname: 'Rack 5' }
  ];
}
