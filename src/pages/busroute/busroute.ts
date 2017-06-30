import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../app/service';
@Component({
  selector: 'page-busroute',
  templateUrl: 'busroute.html',
  providers:[Service]
})
export class BusRoutePage  {
routes: any;
routenum:any;
//unique:any;
  constructor(public navCtrl: NavController, private _routeService:Service) {

  }
  public ngOnInit(): any
  {
    this._routeService.getRoutes().subscribe( routes => {
      this.routes = Array.from(new Set(routes.map((itemInArray)=>itemInArray.source)));
      
    });
  }
  routeNumber(source, destination){
    this._routeService.getRoute(source, destination).subscribe(routenum =>{
      this.routenum=routenum;
    });
  }

}
