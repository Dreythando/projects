import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<section>
    <app-home></app-home>
  </section>`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent],
})
export class AppComponent {
  title = 'homes';
}
