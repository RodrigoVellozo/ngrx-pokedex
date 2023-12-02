import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [SearchComponent]
})
export class NavbarComponent {

}
