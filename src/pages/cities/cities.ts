import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../app/service';
@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
  providers:[Service]
})
export class CitiesPage {
imgurl:any;
cityName:any;
  constructor(public navCtrl: NavController, private _service:Service) {

  }
  cities(city: string){
    //this._service.updateCityname(this.cityName);
this._service.getCitiesImg(city).subscribe(imgurl=>{
  this.imgurl=imgurl;
})
}

}
