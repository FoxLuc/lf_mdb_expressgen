import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lf-expressgen';
  results: object;
  constructor (public http: HttpClient){

  }

  onClick()
  {
    this.http.get('https://3000-f2461e02-fe1e-4154-8e37-e6935043e6e7.ws-eu01.gitpod.io/users').subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data['movies'];
      });
  }
}
