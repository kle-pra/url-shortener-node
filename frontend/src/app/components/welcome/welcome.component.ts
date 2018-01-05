import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private urlService: UrlService) { }

  url: string;

  ngOnInit() {
  }

  onUrlSubmit(val) {
    console.log(val.form.value.url);
  }

}
