import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // Use 'styleUrls' instead of 'styleUrl'
})
export class FooterComponent {

}
