import { Component } from '@angular/core';

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html'
   
})
/** role component*/
export class RoleComponent {
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 150},
    { headerName: 'S.No', field: 'SNo', width: 400 },
    { headerName: 'Role Name', field: 'RoleName', sortable: true, filter: true, width: 350 },
    ];

  rowData = [
    { all: " ", checkboxSelection: true, SNo: '1', RoleName: 'Warehouse 1' },
    { all: " ", checkboxSelection: true, SNo: '2', RoleName: 'Warehouse 2' },
    { all: " ", checkboxSelection: true, SNo: '3', RoleName: 'Warehouse 3' },
    { all: " ", checkboxSelection: true, SNo: '4', RoleName: 'Warehouse 4' },
    { all: " ", checkboxSelection: true, SNo: '5', RoleName: 'Warehouse 5' },
    { all: " ", checkboxSelection: true, SNo: '6', RoleName: 'Warehouse 6' },
    { all: " ", checkboxSelection: true, SNo: '7', RoleName: 'Warehouse 7' },
    { all: " ", checkboxSelection: true, SNo: '8', RoleName: 'Warehouse 8' },
    { all: " ", checkboxSelection: true, SNo: '9', RoleName: 'Warehouse 9' },

  ];
}
