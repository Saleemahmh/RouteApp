import {Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Service{
    cityname:any;
constructor(private _http:Http){
    
}
getRoute(source:string, destination:string){
    return this._http.get('http://mcsaleem01:8080/Routes-0.0.1-SNAPSHOT/bus/routenumbers?source='+source+'&destination='+destination)
    .map(res => res.json());
}
getRoutes(){
    return this._http.get('http://mcsaleem01:8080/Routes-0.0.1-SNAPSHOT/bus/routes').map(res => res.json());
}
getCitiesImg(city: string){
    return this._http.get('http://mcsaleem01:8080/Routes-0.0.1-SNAPSHOT/cities/'+ city)
    .map(res=>res.json());
}
getTrainRoute(source:string, destination:string){
    return this._http.get('http://mcsaleem01:8080/Routes-0.0.1-SNAPSHOT/train/time?source='+source+'&destination='+destination)
    .map(res => res.json());
}
    updateCityname(cityname:string){
        this.cityname = cityname;
    }
}