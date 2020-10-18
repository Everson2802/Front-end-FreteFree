import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { BackButtonService } from '../components/back-button.service';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;
  footerIndex: number;

  position: any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  // modelPoints: Points;
  travelMode: string = "DRIVING";
  optPolyLine: any = {
    strokeColor: '#007bff',
    strokeOpacity: 0.50,
    strokeWeight: 3
  };
  blockAnimate: boolean = false;
  filters: any = {
    filter1: "",
    filter2: ""
  };

  latitude: number;
  longitude: number;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private bkButton: BackButtonService
  ) {
    // this.modelPoints = new Points;
    // this.modelPoints.origin = "";
    // this.modelPoints.destiny = "";
  }

  //   ngOnInit() {
  //     this.modelPoints.origin = '-9.564262, -35.755716'; //this.activatedRoute.snapshot.paramMap.get('origin');
  //     this.modelPoints.destiny = '-9.559131, -35.748260'; //this.activatedRoute.snapshot.paramMap.get('destiny');
  //     this.filters.filter1 = ''; //this.activatedRoute.snapshot.paramMap.get('filter1');
  //     this.filters.filter2 = ''; // this.activatedRoute.snapshot.paramMap.get('filter2');

  //     setTimeout(() => {
  //       this.initMap();
  //     }, 500);
  //   }

  //   initMap() {
  //     this.position = this.mountLatlngObj(this.modelPoints.origin);

  //     this.map = new google.maps.Map(document.getElementById('map'), {
  //       center: this.position,
  //       zoom: 18,
  //     });

  //     this.directionsDisplay = new google.maps.DirectionsRenderer({
  //       polylineOptions: this.optPolyLine,
  //     });

  //     this.directionsDisplay.setMap(this.map);

  //     this.traceRoute();
  //     this.watchPositionPoint();
  //     this.redirectPositionCenter();

  //   }

  //   watchPositionPoint() {
  //     let watch = this.geolocation.watchPosition();
  //     watch.subscribe((data) => {
  //       // if (data.coords) {
  //         this.modelPoints.origin = '-9.564262, -35.755716';
  //         this.traceRoute();
  //       // }
  //     });
  //   }

  //   traceRoute() {
  //     let service: any = this.directionsService;
  //     let display: any = this.directionsDisplay;
  //     let request: any = {
  //       origin: this.modelPoints.origin,
  //       destination: this.modelPoints.destiny,
  //       travelMode: this.travelMode,
  //     }
  //     service.route(request, function (result, status) {
  //       if (status == 'OK') {
  //         display.setDirections(result);
  //         // console.log(result.routes[0].legs[0]);
  //       }
  //     });
  //   }

  //   private mountLatlngObj(latlng: string) {
  //     let latlngArray = latlng.split(',');

  //     return {
  //       lat: Number(latlngArray[0]),
  //       lng: Number(latlngArray[1])
  //     };
  //   }

  //   private redirectPositionCenter() {
  //     this.directionsDisplay.setMap(null);
  //     this.directionsDisplay = new google.maps.DirectionsRenderer({
  //       polylineOptions: this.optPolyLine,
  //       preserveViewport: true
  //     });
  //     this.directionsDisplay.setMap(this.map);

  //     let map = this.directionsDisplay.getMap();

  //     map.setCenter(this.mountLatlngObj(this.modelPoints.origin));
  //     map.setZoom(18);

  //     this.watchPositionPoint();
  //   }

  //   private changeTravelMode() {
  //     this.traceRoute();
  //   }
  // }

  // export class Points {
  //   origin: string;
  //   destiny: string;
  // }



  ngOnInit() {
    this.bkButton.actionButton('/folder/index');
    this.loadMap();
    this.footerIndex = 1;
  }

  loadMap() {

    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.map.addListener('dragend', () => {

        this.latitude = this.map.center.lat();
        this.longitude = this.map.center.lng();

        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    // console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });

  }

  selectRegionFooter(regionFooter: number) {
    this.footerIndex = regionFooter;
  }

  selectTravel(numberImgCol: number) {
    let imgCols = document.getElementsByClassName('img-col');
    
    for (let i=0; i < imgCols.length; i++) {
      if (i == numberImgCol)
        imgCols[i].classList.add('img-col-active');
      else
        imgCols[i].classList.remove('img-col-active');
    }
  }
}
