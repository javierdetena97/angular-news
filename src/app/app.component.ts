import {Component} from '@angular/core';
import {NewService} from "./services/new.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-news';

  newsList: any[] = [];
  loading = false;

  constructor(private _newService: NewService) {

  }

  searchNews(parameters: any) {
    this.loading = true;
    this.newsList = [];

    setTimeout(() => {
      this._newService.getNews(parameters).subscribe(data => {
        this.loading = false;
        console.log(data);
        this.newsList = data.articles;
      }, error => {
        this.loading = false;
        console.log(error)
      })
    }, 1000);

  }
}
