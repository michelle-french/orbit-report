import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';

sourceList: Satellite[];

shouldShowWarning: boolean=true;

constructor() {
  // this.sourceList = [
  //    new Satellite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
  //    new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
  //    new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
  //    new Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
  //    new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true),
  // ];
  this.sourceList = [];
  let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

  window.fetch(satellitesUrl).then(function(response) {
    response.json().then(function(data) {

      let fetchedSatellites = data.satellites;
         for(let i=0; i<fetchedSatellites.length; i++){
          this.sourceList.push(new Satellite (fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational));
         }

    }.bind(this));
  }.bind(this));

  // function shouldShowWarning() {
  //   let fred = (this.satellite.type).toLowerCase();
  //   if(fred = "space debris"){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
}
}