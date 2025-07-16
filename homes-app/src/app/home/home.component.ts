import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
   <form>
    <input type="text" placeholder="Filter by City">
    <button class="primary" type="search" > Search</button>
   </form>
   <section class="results"></section>
  `,
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {

}
