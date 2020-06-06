import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  @Input() id: number;
  msg: string;

  constructor(public route: ActivatedRoute, private title: Title) {
  }

  ngOnInit(): void {

    switch (this.id) {
      case 1:
        this.msg = 'عملیات با موفقیت انجام شد';
        break;
      case 2:
        this.msg = 'متاسفانه سایت با خطا مواجه شد';
        break;
      default:
        this.msg = 'خطا نامشخص';
        break;
    }
  }
}
