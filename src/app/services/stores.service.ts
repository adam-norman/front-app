import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Location} from '../models/Location'; 
import { EnvironmentUrlService } from './environment-url.service';
import StoreDto from '../models/StoreDto';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
url = this.env.baseUrl.concat('store/');
headers = { 'content-type': 'application/json; charset=utf-8' , 'accept': 'application/json' };
  constructor(private http: HttpClient, private env:EnvironmentUrlService) { }

  getStoreListByUserGeoLocation(userLocation:Location): Observable<StoreDto[]> {
    const body= JSON.stringify(userLocation);
    return this.http.post<StoreDto[]>(
      this.url.concat('GetStoreListByUserGeoLocation/'),body,{headers:this.headers});
  }
  getItemsListByStoreId(storeId:number): Observable<StoreDto> {
     
    return this.http.get<StoreDto>(
      this.url.concat('GetItemsListByStoreId/'+storeId.toString()), {headers:this.headers});
  }
}

