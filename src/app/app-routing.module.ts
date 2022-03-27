import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoresListViewComponent } from './stores-list-view/stores-list-view.component';


const routes: Routes = [
  { path: 'home', component : HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'details', component: StoreDetailsComponent},
  { path: 'StoresListView', component: StoresListViewComponent},
  { path: '404', component : NotFoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
