import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'ag-grid-enterprise';
@Component({
  selector: 'app-grid-picking-location',
  templateUrl: './grid-picking-location.component.html'

})
/** grid-picking-location component*/
export class GridPickingLocationComponent implements OnInit {
  //columnDefs = [
  //  { headerName: "S.No.", field: "all", width: 150 },
  //  { headerName: 'Pick List Number', field: 'PickListNumber', sortable: true, filter: true, width: 280 },
  //  { headerName: 'Created By', field: 'CreatedBy', sortable: true, filter: true, width: 280 },
  //  { headerName: 'Created On', field: 'CreatedOn', sortable: true, filter: true, width: 275 },
  //  { headerName: 'Customer Name', field: 'CustomerName', sortable: true, filter: true, width: 280 },
  //  { headerName: 'Status', field: 'Status', sortable: true, filter: true, width: 275 }



  //];

  //rowData = [
  //  { all: 1, PickListNumber: 'PL0001', CreatedBy: 'Amar Singh', CreatedOn: '25/12/2018', CustomerName: 'Rahul', Status: 'Created' },
  //  { all: 2, PickListNumber: 'PL0002', CreatedBy: 'Amar Singh', CreatedOn: '25/12/2018', CustomerName: 'Rahul', Status: 'Created' },
  //  { all: 3, PickListNumber: 'PL0003', CreatedBy: 'Amar Singh', CreatedOn: '25/12/2018', CustomerName: 'Rahul', Status: 'Created' },
  //  { all: 4, PickListNumber: 'PL0004', CreatedBy: 'Amar Singh', CreatedOn: '25/12/2018', CustomerName: 'Rahul', Status: 'Created' },
  //  { all: 5, PickListNumber: 'PL0005', CreatedBy: 'Amar Singh', CreatedOn: '25/12/2018', CustomerName: 'Rahul', Status: 'Created' },
  //  { all: 6, PickListNumber: 'PL0006', CreatedBy: 'Amar Singh', CreatedOn: '25/12/2018', CustomerName: 'Rahul', Status: 'Created' },
  //  { all: 7, PickListNumber: 'PL0007', CreatedBy: 'Amar Singh', CreatedOn: '25/12/2018', CustomerName: 'Rahul', Status: 'Created' },
  //];

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private detailCellRendererParams;
  private rowData: [];

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: "sno",
        cellRenderer: "agGroupCellRenderer"
      },
      { field: "Item" },
      { field: "unit" },
      {
        field: "To Be Delivered Quantity",
        valueFormatter: "x.toLocaleString() + 'm'"
      }
    ];
    this.detailCellRendererParams = {
      detailGridOptions: {
        columnDefs: [
          { field: "sno" },
          { field: "sticker code" },
          { field: "sticker quantity" },
          {
            field: "to be picked quantity",
            valueFormatter: "x.toLocaleString() + 's'"
          },
          { field: "picked quantity" }
        ],
        onFirstDataRendered(params) {
          params.api.sizeColumnsToFit();
        }
      },
      getDetailRowData: function (params) {
        params.successCallback(params.data.location);
      }
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "http://localhost:51602/assets/json/nestdata.json"
      )
      .subscribe(data => {
        this.rowData = data;
      });

    setTimeout(function () {
      var rowCount = 0;
      params.api.forEachNode(function (node) {
        node.setExpanded(rowCount++ === 1);
      });
    }, 500);
  }


}
