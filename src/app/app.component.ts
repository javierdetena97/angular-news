import {Component} from '@angular/core';
import {NewService} from "./services/new.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-news';

  constructor(private _newService: NewService) {

  }

  searchNews(parameters: any) {
    console.log('CategoryCountryForm, I\'m your father!');
    console.log(parameters);

    this._newService.getNews(parameters).subscribe(data => {
      console.log(data);
    })
  }
}
