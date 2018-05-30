import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  // name of the city.
  location: any;
  // default latitude and longitude value for the map, Toronto.
  lat = 43.6532;
  lng = -79.3832;
  // To store the city's weather data.
  fiveDaysData: any;
  // to store the list of weather records of a city
  datas = [];
  // for collapsing
  submitted = false;
  citySubmitted;

  constructor(private _weatherService: WeatherService) { }
  // fired whenever your component is initialised and called only once per component.
  ngOnInit() {
  }

  onSubmit() {
    // form vanishes on submission.
    this.submitted = true;
    // gets 5 days weather data of the city.
    this._weatherService.get5DaysWeatherData(this.location)
                        .subscribe(res => {
                          console.log(res);
                          this.fiveDaysData = res;
                          this.datas = this.fiveDaysData.list;
                          // console.log(this.datas);
                        });
    this.citySubmitted = true;
  }
}
