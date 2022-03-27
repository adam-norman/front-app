import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { StoreService } from '../services/stores.service';
import StoreDto from '../models/StoreDto';
const iconUrl = 'assets/mapMarker.png';
const shadowUrl = 'assets/mapMarkerBlue.png';
const iconRetinaUrl = 'assets/mapMarkerOrange.png';

const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  storesList: StoreDto[];
  private map;
  stores = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 1,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });
  mapMarker = L.icon({
    iconUrl: '/assets/imgs/map/mapMarker.png',
    iconSize: [20, 20]
  });
  mapMarkerBlue = L.icon({
    iconUrl: '/assets/imgs/map/mapMarkerBlue.png',
    iconSize: [20, 20],
  });
  markers = new L.FeatureGroup();
  storesMarkers = new L.FeatureGroup();
  public lat;
  public lng;
  title = 'restaurant-nav-app';
  public ngOnInit(): void {
    this.getLocation();
  }
  constructor(private _storesService: StoreService) {
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.initMap();
          this._storesService.getStoreListByUserGeoLocation({ 'lat': this.lat, 'lng': this.lng }).subscribe(res => {
            console.log(res);
            if (res) {
              this.storesList=res;
              res.forEach(store => {
                const marker = L.marker([store.lat, store.lng], { icon: this.mapMarkerBlue });
                marker.bindPopup(store.name, {
                  showOnMouseOver: true
                });
                marker.addTo(this.map);
              });
            }
          });
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [this.lat, this.lng],
      zoom: 14,
      layers: [this.stores]

    });
    const marker = L.marker([this.lat, this.lng], { icon: this.mapMarker });
    marker.bindPopup('me', {
      showOnMouseOver: true
    });
    marker.addTo(this.map);
  }

}