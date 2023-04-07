import { Component } from '@angular/core';
import { faTwitter,  faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faEarthAmerica} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  Facebook = faFacebookF;
  Twitter = faTwitter;
  Instagram = faInstagram;
  Earth = faEarthAmerica;
}
