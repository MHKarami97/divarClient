import { Component, OnInit } from '@angular/core';
import { ErrorToast } from 'src/app/errorToast';
import { Meta } from '@angular/platform-browser';
import { ChatShort } from 'src/app/models/chat/chat.module';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  loading = false;
  error = null;
  isData = false;
  source: ChatShort[] = [];

  constructor(private meta: Meta, private dataService: ChatService, private errorToast: ErrorToast) {

  }

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'description', content: 'my site is here' },
      { name: 'author', content: 'mhkarami' },
      { name: 'keywords', content: 'Angular, cms, site, ' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'ALL' },
      { name: 'theme-color', content: '#b3e6ff' },
      { name: 'author', content: 'mhkarami' },
    ], true);

    this.loading = true;

    this.dataService.getByUser().subscribe(
      results => {
        if (results.isSuccess) {
          this.source = results.data;
        } else {
          this.errorToast.showSuccess(results.message);
        }

        this.loading = false;
      },
      error => {
        this.loading = false;
        this.error = error.message;
        this.errorToast.showSuccess(error.message);
      },
    );
  }

}
