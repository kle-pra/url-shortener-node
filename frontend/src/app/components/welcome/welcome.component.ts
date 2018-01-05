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
  shortUrl: string;

  ngOnInit() {
  }

  onUrlSubmit(val) {
    this.urlService.shortenUrl(val.form.value.url).subscribe(json=>{
      this.shortUrl = json.shortUrl;
    }, error => {
      console.log(error);
    });
  }


}
