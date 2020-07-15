import { Component, OnInit, Input } from '@angular/core';
import { ErrorToast } from 'src/app/errorToast';
import { Title } from '@angular/platform-browser';
import { ChatCreate } from 'src/app/models/chat/chat.module';
import { ChatService } from 'src/app/services/chat.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
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
  create: ChatCreate = { id: 0, creatorId: 0, from: 0, postId: 0, text: null };
  @Input() id: string;

  constructor(private title: Title,private router : Router, public route: ActivatedRoute, private auth: AuthorizeService, private dataService: ChatService, private errorToast: ErrorToast,
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
    this.create.from = 2;

    this.dataService.create(this.create).subscribe(
      results => {
        if (results.isSuccess) {
          this.toastr.success('هورا', 'پیام با موفقیت ارسال شد');

          setTimeout(() => {
            this.router.navigate(['/pages/auth/chat']);
            window.location.reload();
          }, 2000);
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
