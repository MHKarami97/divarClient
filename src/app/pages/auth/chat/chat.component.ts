import { Component, OnInit } from '@angular/core';
import { ErrorToast } from 'src/app/errorToast';
import { Title } from '@angular/platform-browser';
import { ChatShort, ChatPost, ChatCreate } from 'src/app/models/chat/chat.module';
import { ChatService } from 'src/app/services/chat.service';
import { ToastrService } from 'ngx-toastr';

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
  source1: ChatShort[] = [];
  single: ChatPost = null;
  create: ChatCreate = null;

  constructor(private title: Title, private dataService: ChatService, private errorToast: ErrorToast,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.title.setTitle('پنل مدیریت شما');

    this.loading = true;

    this.dataService.getByUser().subscribe(
      results => {
        if (results.isSuccess) {
          this.source = results.data;
          this.source1 = this.source;
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

  onClick(id: number, creatorId: number) {
    this.loading = true;

    this.dataService.getByPost(id, creatorId).subscribe(
      results => {
        if (results.isSuccess) {
          this.single = results.data;
          this.single.postId = id;
          this.single.postTitle = this.source.find(a => a.postId === id).postTitle;
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

  onAdd() {
    this.loading = true;

    this.create.postId = this.single.postId;
    this.create.creatorId = this.source.find(a => a.postId === this.single.postId).creatorId;

    this.dataService.create(this.create).subscribe(
      results => {
        if (results.isSuccess) {
          this.toastr.success('هورا', 'پیام با موفقیت ارسال شد');
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

  onSearchChat(input: string) {
    if (input !== '') {
      this.source = this.source1.filter(a => a.postTitle.includes(input));
    } else {
      this.source = this.source1;
    }
  }
}
