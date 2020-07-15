import { Component, OnInit, Input } from '@angular/core';
import { ErrorToast } from 'src/app/errorToast';
import { Title } from '@angular/platform-browser';
import { ChatShort, ChatPost, ChatCreate } from 'src/app/models/chat/chat.module';
import { ChatService } from 'src/app/services/chat.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { AuthorizeService } from 'src/app/services/other/authorize.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class ChatStartComponent implements OnInit {
  loading = false;
  error = null;
  text: string;
  create: ChatCreate = null;
  @Input() id: string;

  constructor(private title: Title, public route: ActivatedRoute, private auth: AuthorizeService, private dataService: ChatService, private errorToast: ErrorToast,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.title.setTitle('شروع چت');

    this.id = this.route.snapshot.paramMap.get('id');
  }

  onAdd() {
    this.loading = true;

    this.create.postId = +this.id;
    this.create.text = this.text;
    this.create.creatorId = 0;

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
}
