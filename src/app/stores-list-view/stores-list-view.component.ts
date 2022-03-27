import { AfterViewInit, Component,Input, OnInit } from '@angular/core';
import StoreDto from '../models/StoreDto';
import { StoreService } from '../services/stores.service';

@Component({
  selector: 'app-stores-list-view',
  templateUrl: './stores-list-view.component.html',
  styleUrls: ['./stores-list-view.component.css']
})

export class StoresListViewComponent   {
  @Input() inputStoresList: StoreDto[]; 
}
