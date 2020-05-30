import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Post } from 'src/models/post/post.module';

@Component({
  selector: 'app-theme-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {

  loading = false;
  error = null;
  phone = '939xxx';
  showPhoneText = true;
  @Input() item: Post;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fa']);
  }

  ngOnInit(): void {

  }

  onPhoneClick() {
    this.phone = this.item.phone;
    this.showPhoneText = false;
  }
}
