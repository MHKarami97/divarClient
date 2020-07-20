import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post, PostCreate, PostSelectEdit } from 'src/app/models/post/post.module';
import { PostService } from 'src/app/services/post.service';
import { ErrorToast } from 'src/app/errorToast';
import { CategoryWithSub } from 'src/app/models/category/category.module';
import { StateWithSub } from 'src/app/models/state/state.module';
import { StateService } from 'src/app/services/state.service';
import { CategoryService } from 'src/app/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Setting } from 'src/app/setting';
import { PostImage } from 'src/app/models/post/image.module';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  loading = false;
  error = null;
  source: PostSelectEdit = null;
  cats: CategoryWithSub[] = null;
  states: StateWithSub[] = null;
  types: any[] = [
    {
      id: 1,
      name: 'عادی',
    },
    {
      id: 2,
      name: 'ویژه',
    }
  ];

  submitted = false;
  isChecked = false;
  latitude = 35.6964895;
  longitude = 51.0696315;
  mapType = 'satellite';
  tempImg = new PostImage();
  selectedMarker;
  public uploadedFiles: Array<File> = [];
  item: PostCreate = {
    categoryId: 0, location: null, type: 1,
    phone: null, price: null, stateId: 0, title: null, text: null
  };

  @Input() id: string;

  constructor(private errorToast: ErrorToast, public route: ActivatedRoute, private title: Title, private dataService: PostService,
    private dataCatService: CategoryService, private dataStateService: StateService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.title.setTitle('ویرایش آگهی');

    this.id = this.route.snapshot.paramMap.get('id');

    this.tempImg.image = '/assets/img/default.png';

    this.loading = true;

    this.dataService.getByIdForEdit(+this.id).subscribe(
      results => {
        if (results.isSuccess) {
          this.source = results.data;

          this.source.images.length !== 0 ? this.source.images
            .forEach(b => b.image = Setting.baseFileUrl + b.image) : this.source.images.push(this.tempImg);

          this.latitude = +this.source.location.split(',')[0];
          this.longitude = +this.source.location.split(',')[1];

          this.item.categoryId = this.source.categoryId;
          this.item.stateId = this.source.stateId;
          this.item.phone = this.source.phone;
          this.item.price = this.source.price;
          this.item.title = this.source.title;
          this.item.text = this.source.text;
          this.item.type = this.source.type;
        } else {
          this.errorToast.showSuccess(results.message);
        }
      },
      error => {
        this.loading = false;
        this.error = error.message;
        this.errorToast.showSuccess(error.message);
      },
    );

    this.dataCatService.getCategoryWithSub().subscribe(
      results => {
        if (results.isSuccess) {
          this.cats = results.data;
        } else {
          this.errorToast.showSuccess(results.message);
        }
      },
      error => {
        this.error = error.message;
        this.errorToast.showSuccess(error.message);
      },
    );

    this.dataStateService.getStateWithSub().subscribe(
      results => {
        if (results.isSuccess) {
          this.states = results.data;
        } else {
          this.errorToast.showSuccess(results.message);
        }

        this.loading = false;
      },
      error => {
        this.error = error.message;
        this.errorToast.showSuccess(error.message);
      },
    );
  }

  onAdd(): void {
    this.submitted = true;
    this.loading = true;

    this.item.phone = this.item.phone.toString();

    this.dataService.update(+this.id, this.item).subscribe(
      results => {
        if (results.isSuccess) {
          this.toastr.success('هورا', 'تبلیغ با موفقیت ویرایش شد، منتظر تایید آن باشید');

          setTimeout(() => {
            this.router.navigate(['/pages/auth/controll']);
            window.location.reload();
          }, 2000);

        } else {
          this.errorToast.showSuccess(results.message);
        }

        this.loading = false;
      },
      error => {
        this.error = error.message;
        this.errorToast.showSuccess(error.message);
      },
    );
    this.loading = false;
  }

  onCheckboxChange() {
    this.isChecked = !this.isChecked;
    this.item.price = 0;
  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };

    this.item.location = event.coords.lat + ',' + event.coords.lng;
  }
}
