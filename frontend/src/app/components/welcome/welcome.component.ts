import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../services/url.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private urlService: UrlService, private flashService:FlashMessagesService) { }

  url: string = "";
  shortUrl: string;

  ngOnInit() {
  }

  onUrlSubmit(val) {
    this.urlService.shortenUrl(val.form.value.url).subscribe(json=>{
      this.shortUrl = json.shortUrl;
    }, error => {
      this.flashService.show('Error in submission!', { timeout: 5000 });
      console.log(error);
    });
  }


}
