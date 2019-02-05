import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAisleComponent } from './setup/aisle/createAisle.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CreateRackComponent } from './setup/create-rack/create-rack.component';
import { CreateBinComponent } from './setup/create-bin/create-bin.component';
import { CreateTruckTypesComponent } from './setup/create-truck-types/create-truck-types.component';
import { CreateTruckDriverComponent } from './setup/create-truck-driver/create-truck-driver.component';
import { CreateTruckComponent } from './setup/create-truck/create-truck.component';
import { CreateStickerComponent } from './setup/create-sticker/create-sticker.component';
import { CreateStillageComponent } from './setup/create-stillage/create-stillage.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { RoleAssignmentComponent } from './role-assignment/role-assignment.component';
import { LineToFgWarehouseComponent } from './line-to-fg-warehouse/line-to-fg-warehouse.component';
import { StillageToStillageComponent } from './stillage-to-stillage/stillage-to-stillage.component';
import { GridAssignTruckComponent } from './pick-to-load-process/grid-assign-truck/grid-assign-truck.component';
import { GridPickedListComponent } from './pick-to-load-process/grid-picked-list/grid-picked-list.component';
import { GridPickingListComponent } from './pick-to-load-process/grid-picking-list/grid-picking-list.component';
//import { GridPickingLocationComponent } from './pick-to-load-process/grid-picking-location/grid-picking-location.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CreateAisleComponent,
    CounterComponent,
    FetchDataComponent,
    CreateRackComponent,
    CreateBinComponent,
    CreateTruckTypesComponent,
    CreateTruckDriverComponent,
    CreateTruckComponent,
    CreateStickerComponent,
    UserComponent,
    RoleComponent,
    RoleAssignmentComponent,
    LineToFgWarehouseComponent,
    StillageToStillageComponent,
    GridAssignTruckComponent,
    GridPickedListComponent,
    GridPickingListComponent,
   
    CreateStillageComponent
  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule, AgGridModule.withComponents([]),
    FormsModule, BrowserAnimationsModule, TreeViewModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'createAisle', component: CreateAisleComponent },
      { path: 'create-rack', component: CreateRackComponent },
      { path: 'create-bin', component: CreateBinComponent },
      { path: 'create-truck-type', component: CreateTruckTypesComponent },
      { path: 'create-truck-driver', component: CreateTruckDriverComponent },
      { path: 'create-truck', component: CreateTruckComponent },
      { path: 'create-sticker', component: CreateStickerComponent },
      { path: 'create-stillage', component: CreateStillageComponent },
      { path: 'create-user', component: UserComponent },
      { path: 'create-role', component: RoleComponent },
      { path: 'role-assignment', component: RoleAssignmentComponent },
      { path: 'fg-warehouse', component: LineToFgWarehouseComponent },
      { path: 'stillage-to-stillage', component: StillageToStillageComponent },
      { path: 'assign-truck', component: GridAssignTruckComponent },
      { path: 'picked-list', component: GridPickedListComponent },
      { path: 'picking-list', component: GridPickingListComponent },
     
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
