import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import StoreDto from '../models/StoreDto';
import { StoreService } from '../services/stores.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {

  constructor(private _storesService: StoreService, private activatedRoute: ActivatedRoute) { }
  storeId: number;
  storeData: StoreDto;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.id) {
        this._storesService.getItemsListByStoreId(params.id).subscribe(res => {
          if (res) {
            console.log(res);
            this.storeData = res;
          }
        });
      }
    });
  }
}
