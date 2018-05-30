import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location: any;
  // to store city name in localstorage
  value: any;
  // to store toronto's weather data
  torontoWeatherData: any;
  submitted;
  // to store searched city's weather data
  weatherData: any;
  // Default latitude and longitude value for the map
  lat = 43.65;
  lng = -79.38;
  citySubmitted = false;

  constructor(private _weatherService: WeatherService, private _router: Router, private _route: ActivatedRoute) { }

  // it runs once after the component is initialised.
  // to save and show Toronto's weather at the top all the time after the component is initialised.
  ngOnInit() {
    this.value = localStorage.getItem('location');
    if (this.value != null) {
      this.location = JSON.parse(this.value);
    } else {
      this.location = 'Toronto';
    }
    this._weatherService.getWeatherData(this.location)
                        .subscribe(res => {
                          console.log(res);
                          this.torontoWeatherData = res;
                        });
  }

  // gets the weather data of searched city
  onSubmit() {
    // shows the current weather of the city on submission
    this.submitted = true;
    this._weatherService.getWeatherData(this.location)
                        .subscribe(
                          res => {
                            console.log(res);
                            this.weatherData = res;
                        });
    this.citySubmitted = true;
  }
}
