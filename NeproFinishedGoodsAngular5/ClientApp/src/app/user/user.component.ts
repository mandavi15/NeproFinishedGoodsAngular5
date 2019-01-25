import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
    //styleUrls: ['./user.component.css']
})
/** user component*/
export class UserComponent {
    
    columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 150 },
      { headerName: 'User Name', field: 'UserName', sortable: true, filter: true, width: 485 },
      { headerName: 'Password', field: 'Password', sortable: true, filter: true, width: 350 }
    
  ];

  rowData = [
    { all: " ", checkboxSelection: true, UserName: 'Rahul', Password: 'Rahul19998' },
    { all: " ", checkboxSelection: true, UserName: 'Raj', Password: '9998' },
    { all: " ", checkboxSelection: true, UserName: 'Amar', Password: '998' },
    { all: " ", checkboxSelection: true, UserName: 'Abhishek', Password: '19998' },
    { all: " ", checkboxSelection: true, UserName: 'Mohit', Password: '199' },
    { all: " ", checkboxSelection: true, UserName: 'Fateh', Password: '1998' },

   
  ];
}
