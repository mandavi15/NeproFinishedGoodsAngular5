import { Component } from '@angular/core';

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html'
   
})
/** role component*/
export class RoleComponent {
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 150},
    { headerName: 'S.No', field: 'SNo', sortable: true, filter: true, width: 400 },
    { headerName: 'Role Name', field: 'RoleName', sortable: true, filter: true, width: 435 },
    ];

  rowData = [
    { all: " ", checkboxSelection: true, SNo: '1', RoleName: 'Warehouse 1' },
    { all: " ", checkboxSelection: true, SNo: '2', RoleName: 'Warehouse 1' },
    { all: " ", checkboxSelection: true, SNo: '3', RoleName: 'Warehouse 1' },
    { all: " ", checkboxSelection: true, SNo: '4', RoleName: 'Warehouse 1' },
    { all: " ", checkboxSelection: true, SNo: '5', RoleName: 'Warehouse 1' },
    { all: " ", checkboxSelection: true, SNo: '6', RoleName: 'Warehouse 1' },
    { all: " ", checkboxSelection: true, SNo: '7', RoleName: 'Warehouse 1' },
    { all: " ", checkboxSelection: true, SNo: '8', RoleName: 'Warehouse 1' },
    { all: " ", checkboxSelection: true, SNo: '9', RoleName: 'Warehouse 1' },

  ];
}
