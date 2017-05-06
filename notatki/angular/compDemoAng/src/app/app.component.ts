import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<div><p>hello</p><p>{{name}}</p><app-user-list></app-user-list></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Spring";
  title = 'app works!';
}
