import { Component } from '@angular/core';
import { CovidDataService } from './covid-data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  covidData: Array<any> = [];
  dataSource!: MatTableDataSource<any>;
  title = 'covidResults';
  displayedColumns=['infected', 'tested', 'recovered']

  constructor(private CovidService:CovidDataService){}

  getDataFromCovidAPI() {
    this.CovidService.getDataCovid().subscribe((data) => {
      console.log(data);
      this.covidData = data;
      this.dataSource = new MatTableDataSource(this.covidData);
    });
  }
}
