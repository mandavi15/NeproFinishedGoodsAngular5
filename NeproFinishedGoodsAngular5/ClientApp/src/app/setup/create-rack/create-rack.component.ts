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
    { headerName: 'Location', field: 'location', sortable: true, filter: true, width: 240 },
    { headerName: 'Row Name', field: 'rowname', sortable: true, filter: true, width: 245 }
  ];

  rowData = [
    { all: " ", checkboxSelection: true, site: 'Ghaziabad', warehouse: 'Warehouse 1', location: 'Location 1', rowname:'Row 1' },
    { all: " ", checkboxSelection: true, site: 'Noida', warehouse: 'Warehouse 2', location: 'Location 2', rowname: 'Row 2' },
    { all: " ", checkboxSelection: true, site: 'Delhi', warehouse: 'Warehouse 3', location: 'Location 3', rowname: 'Row 3' },
    { all: " ", checkboxSelection: true, site: 'Gurgaon', warehouse: 'Warehouse 4', location: 'Location 4', rowname: 'Row 4' },
    { all: " ", checkboxSelection: true, site: 'Agra', warehouse: 'Warehouse 5', location: 'Location 5', rowname: 'Row 5' }
  ];
}
