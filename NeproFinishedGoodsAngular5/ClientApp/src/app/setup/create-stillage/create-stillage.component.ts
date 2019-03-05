import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-stillage',
  templateUrl: './create-stillage.component.html'

})
/** create-stillage component*/
export class CreateStillageComponent implements OnInit {
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 150 },
    { headerName: 'WareHouse', field: 'WareHouse', sortable: true, filter: true, width: 280 },
    { headerName: 'Stillage ID', field: 'StillageID', sortable: true, filter: true, width: 280 },
    { headerName: 'Sticker Code', field: 'StickerCode', sortable: true, filter: true, width: 275 }


  ];

  rowData = [
    { all: " ", checkboxSelection: true, WareHouse: 'WareHouse 1', StillageID: 'Stillage 1', StickerCode: 'SC0001' },
    { all: " ", checkboxSelection: true, WareHouse: 'WareHouse 2', StillageID: 'Stillage 2', StickerCode: 'SC0002' },
    { all: " ", checkboxSelection: true, WareHouse: 'WareHouse 3', StillageID: 'Stillage 3', StickerCode: 'SC0003' },
    { all: " ", checkboxSelection: true, WareHouse: 'WareHouse 4', StillageID: 'Stillage 4', StickerCode: 'SC0004' },
    { all: " ", checkboxSelection: true, WareHouse: 'WareHouse 5', StillageID: 'Stillage 5', StickerCode: 'SC0005' },
    { all: " ", checkboxSelection: true, WareHouse: 'WareHouse 6', StillageID: 'Stillage 6', StickerCode: 'SC0006' },
    { all: " ", checkboxSelection: true, WareHouse: 'WareHouse 7', StillageID: 'Stillage 7', StickerCode: 'SC0007' },
    { all: " ", checkboxSelection: true, WareHouse: 'WareHouse 8', StillageID: 'Stillage 8', StickerCode: 'SC0008' },
  ];

  constructor(private formbuilder: FormBuilder) { }

  stillageForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.stillageForm = this.formbuilder.group({
      warehouse: ['', Validators.required],
      stillageID: ['', Validators.required]
    });


  }

  stillageSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.stillageForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.stillageForm.value));

  }
  get f() { return this.stillageForm.controls; }

}
