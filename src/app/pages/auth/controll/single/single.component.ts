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
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {

  loading = false;
  error = null;
  source: Post = null;
  isClick = false;
  latitude: number;
  longitude: number;
  tempImg = new PostImage();
  @Input() id: string;

  constructor(private meta: Meta, private router: Router, public route: ActivatedRoute, private title: Title,
    private dataService: PostService, private errorToast: ErrorToast, private toastr: ToastrService) { }

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

    this.title.setTitle('مدیریت');

    this.tempImg.image = '/assets/img/default.png';

    this.id = this.route.snapshot.paramMap.get('id');

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
  }

  diactiveClick(id: number) {
    this.isClick = true;
    this.loading = true;
    this.dataService.deActive(id).subscribe(
      results => {
        if (results.isSuccess) {
          this.toastr.success(results.message);
          setTimeout(() => {
            this.router.navigate(['/pages/auth/controll']);
          }, 4000);
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
  edit(id: number) {
    this.router.navigate(['/pages/edit/' + id]);
  }
}
