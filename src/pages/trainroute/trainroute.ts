import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Service}from '../../app/service';

@Component({
  selector: 'page-trainroute',
  templateUrl: 'trainroute.html',
  providers:[Service]

})
export class TrainRoutePage {
trainTime:any;
  constructor(public navCtrl: NavController, private _service:Service) {

  }
trainRoute(source, destination){
this._service.getTrainRoute(source, destination).subscribe(trainTime=>{
  this.trainTime=trainTime;
})
}
}
