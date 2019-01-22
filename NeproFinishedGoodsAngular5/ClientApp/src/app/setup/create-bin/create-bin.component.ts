import { Component } from '@angular/core';

@Component({
    selector: 'app-create-bin',
    templateUrl: './create-bin.component.html'
    //styleUrls: ['./create-bin.component.css']
})
/** create-bin component*/
export class CreateBinComponent {
   
  columnDefs = [
    { headerName: "All", checkboxSelection: true,  field: "all", width: 100 },
    { headerName: 'Site', field: 'site', sortable: true, filter: true, width: 180 },
    { headerName: 'WareHouse', field: 'warehouse', sortable: true, filter: true, width: 180 },
    { headerName: 'Location', field: 'location', sortable: true, filter: true, width: 180 },
    { headerName: 'Row Name', field: 'RowName', sortable: true, filter: true, width: 180 },
    { headerName: 'Bin Name', field: 'BinName', sortable: true, filter: true, width: 175 },
    
  ];

  rowData = [
    { all: " ", checkboxSelection: true, site: 'Ghaziabad', warehouse: 'Warehouse 1', location: 'Location 1', RowName: 'Row 1', BinName:'Bin 1' },
    { all: " ", checkboxSelection: true, site: 'Noida', warehouse: 'Warehouse 2', location: 'Location 2', RowName: 'Row 2', BinName: 'Bin 2' },
    { all: " ", checkboxSelection: true, site: 'Delhi', warehouse: 'Warehouse 3', location: 'Location 3', RowName: 'Row 3', BinName: 'Bin 3' },
    { all: " ", checkboxSelection: true, site: 'Gurgaon', warehouse: 'Warehouse 4', location: 'Location 4', RowName: 'Row 4', BinName: 'Bin 4' },
    { all: " ", checkboxSelection: true, site: 'Agra', warehouse: 'Warehouse 5', location: 'Location 5', RowName: 'Row 5', BinName: 'Bin 5' }
  ];
}
