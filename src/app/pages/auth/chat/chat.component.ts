import { Component, OnInit } from '@angular/core';
import { ErrorToast } from 'src/app/errorToast';
import { Title } from '@angular/platform-browser';
import { ChatShort, ChatPost } from 'src/app/models/chat/chat.module';
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
  single: ChatPost = null;

  constructor(private title: Title, private dataService: ChatService, private errorToast: ErrorToast) { }

  ngOnInit(): void {

    this.title.setTitle('پنل مدیریت شما');

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

  onClick(id: number) {
    this.loading = true;
    this.single.postId = id;
    this.single.postTitle = this.source.find(a => a.postId === id).postTitle;

    this.dataService.getByPost(id).subscribe(
      results => {
        if (results.isSuccess) {
          this.single = results.data;
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
