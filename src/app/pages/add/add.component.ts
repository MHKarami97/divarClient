import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post, PostCreate } from 'src/app/models/post/post.module';
import { PostService } from 'src/app/services/post.service';
import { ErrorToast } from 'src/app/errorToast';
import { CategoryWithSub } from 'src/app/models/category/category.module';
import { StateWithSub } from 'src/app/models/state/state.module';
import { StateService } from 'src/app/services/state.service';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  loading = false;
  error = null;
  source: Post = null;
  special = '';
  normal = '';
  cats: CategoryWithSub[] = null;
  states: StateWithSub[] = null;
  types: any[];

  submitted = false;
  isChecked = false;
  latitude = 35.6964895;
  longitude = 51.0696315;
  mapType = 'satellite';
  selectedMarker;
  public uploadedFiles: Array<File> = [];
  item: PostCreate = {
    categoryId: 0, location: null, type: 1,
    phone: null, price: null, stateId: 0, title: null, text: null
  };

  constructor(private errorToast: ErrorToast, private title: Title, private dataService: PostService,
    private dataCatService: CategoryService, private dataStateService: StateService, private router: Router, private toastr: ToastrService,
    public translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.get('Add.Special', { value: 'world' }).subscribe((res: string) => {
      this.special = res;
    });

    this.translate.get('Add.Normal', { value: 'world' }).subscribe((res: string) => {
      this.normal = res;

      this.types = [
        {
          id: 1,
          name: this.normal,
        },
        {
          id: 2,
          name: this.special,
        }
      ];
    });

    this.title.setTitle('ثبت آگهی');

    this.loading = true;
    this.dataCatService.getCategoryWithSub().subscribe(
      results => {
        if (results.isSuccess) {
          this.cats = results.data;
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
        this.loading = false;
        this.error = error.message;
        this.errorToast.showSuccess(error.message);
      },
    );
  }

  onAdd(): void {
    this.submitted = true;
    this.loading = true;

    this.item.phone = this.item.phone.toString();

    const formData: FormData = new FormData();

    for (const key in this.item) {
      if (this.item.hasOwnProperty(key)) {
        formData.append(key, this.item[key]);
      }
    }

    if (this.uploadedFiles != null && this.uploadedFiles.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.uploadedFiles.length; i++) {
        formData.append(this.uploadedFiles[i].name, this.uploadedFiles[i]);
      }
    }

    this.dataService.create(formData).subscribe(
      results => {
        if (results.isSuccess) {
          this.source = results.data;

          this.toastr.success('هورا', 'تبلیغ با موفقیت اضافه شد');

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
