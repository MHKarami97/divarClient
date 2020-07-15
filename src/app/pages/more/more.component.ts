import { Component, OnInit, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post/post.module';
import { PostImage } from 'src/app/models/post/image.module';
import { Setting } from 'src/app/setting';
import { ErrorToast } from 'src/app/errorToast';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss'],
})
export class MoreComponent implements OnInit {

  loading = false;
  error = null;
  url = '';
  source: Post = null;
  phone = 'اطلاعات تماس';
  isPhoneShow = false;
  latitude: number;
  longitude: number;
  tempImg = new PostImage();
  @Input() id: string;

  constructor(private meta: Meta, private router: Router, public route: ActivatedRoute, private title: Title,
    private dataService: PostService, private errorToast: ErrorToast, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.tempImg.image = '/assets/img/default.png';

    this.id = this.route.snapshot.paramMap.get('id');

    this.url = this.router.url;

    this.loading = true;
    this.dataService.getById(+this.id).subscribe(
      results => {
        if (results.isSuccess) {
          this.source = results.data;

          this.source.images.length !== 0 ? this.source.images
            .forEach(b => b.image = Setting.baseFileUrl + b.image) : this.source.images.push(this.tempImg);

          this.latitude = +this.source.location.split(',')[0];
          this.longitude = +this.source.location.split(',')[1];

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

    this.title.setTitle(this.source.title);

    let tags = this.source.title.split(' ');

    this.meta.addTags([
      { name: 'description', content: this.source.text },
      { name: 'keywords', content: tags.join(",") },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'ALL' },
      { name: 'theme-color', content: '#b3e6ff' },
    ], true);
  }

  phoneBtnClick(event: any) {
    this.phone = this.source.phone;
    this.isPhoneShow = true;
    event.target.disabled = true;

    this.toastr.warning('سایت مسئولیتی در برابر خرید شما ندارد', 'هشدار');
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
