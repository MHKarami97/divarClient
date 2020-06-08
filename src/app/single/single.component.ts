import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Post } from 'src/models/post/post.module';

@Component({
  selector: 'app-theme-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit, AfterViewInit {

  loading = false;
  error = null;
  phone = '939xxx';
  showPhoneText = true;
  @Input() item: Post = null;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fa']);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    if (document.getElementById('main.js') != null) {
      document.getElementById('main.js').remove();
    }
    const node = document.createElement('script');
    node.src = '/assets/js/' + 'main.js';
    node.id = 'main.js';
    node.async = false;
    node.type = 'text/javascript';
    document.getElementsByTagName('body')[0].appendChild(node);
  }

  onPhoneClick() {
    this.phone = this.item.phone;
    this.showPhoneText = false;
  }
}
