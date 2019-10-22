import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    headerTitle = 'Header';
    restItems: any;
    public search: any = '';
    // restItemsUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';
    restItemsUrl = 'https://aravindtwitter.herokuapp.com/twittersearch?key=adobe';

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
    .subscribe(
        restItems => {
            this.restItems = restItems;
            console.log(this.restItems);
        }
    );
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
      return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }

}
