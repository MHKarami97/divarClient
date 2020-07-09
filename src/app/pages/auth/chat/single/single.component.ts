import { Component, OnInit, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorToast } from 'src/app/errorToast';
import { ToastrService } from 'ngx-toastr';
import { Chat } from 'src/app/models/chat/chat.module';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-single-chat',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleChatComponent implements OnInit {

  loading = false;
  error = null;
  source: Chat[] = null;
  @Input() id: string;

  constructor(private meta: Meta, private router: Router, public route: ActivatedRoute, private title: Title,
    private dataService: ChatService, private errorToast: ErrorToast, private toastr: ToastrService) { }

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

    this.title.setTitle('چت');

    this.id = this.route.snapshot.paramMap.get('id');

    this.loading = true;
    this.dataService.getByPost(+this.id).subscribe(
      results => {
        if (results.isSuccess) {
          this.source = results.data;

          this.loadScript('theme.js');
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

  public loadScript(url: string) {
    const node = document.createElement('script');
    node.src = '/assets/js/' + url;
    node.id = url;
    node.async = false;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
