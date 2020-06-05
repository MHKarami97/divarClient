import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PostCreate, Post } from 'src/models/post/post.module';
import { PostService } from 'src/services/post.service';
import { Title } from '@angular/platform-browser';
import { CategoryWithSub } from 'src/models/category/category.module';
import { StateWithSub } from 'src/models/state/state.module';
import { CategoryService } from 'src/services/category.service';
import { StateService } from 'src/services/state.service';

@Component({
  selector: 'app-theme-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  loading = false;
  error = null;
  source: Post = null;
  cats: CategoryWithSub[] = null;
  states: StateWithSub[] = null;

  submitted = false;
  isChecked = false;
  latitude = 35.6964895;
  longitude = 51.0696315;
  mapType = 'satellite';
  selectedMarker;
  public uploadedFiles: Array<File> = [];
  item: PostCreate = {
    categoryId: 0, images: null, location: null,
    phone: null, price: null, stateId: 0, tags: null, title: null, description: null
  };

  constructor(public translate: TranslateService, private title: Title, private dataService: PostService,
    private dataCatService: CategoryService, private dataStateService: StateService) {
    translate.addLangs(['en', 'fa']);
    this.title.setTitle('ثبت آگهی');
  }

  ngOnInit(): void {
    this.loading = true;

    this.dataCatService.getCategoryWithSub().subscribe(
      results => {
        this.cats = results.data;
        console.log(results.data);
        this.loading = false;
      },
      error => {
        this.error = error.message;
        this.onError();
      },
    );

    this.dataStateService.getStateWithSub().subscribe(
      results => {
        this.states = results.data;
        this.loading = false;
      },
      error => {
        this.error = error.message;
        this.onError();
      },
    );

    this.loading = false;
  }

  onAdd(): void {
    this.submitted = true;
    this.loading = true;

    this.item.images = this.uploadedFiles;

    console.log(this.item);

    this.dataService.create(this.item).subscribe(
      results => {
        this.source = results.data;
        this.loading = false;
      },
      error => {
        this.error = error.message;
        this.onError();
      },
    );
    this.loading = false;
  }

  onError() {
    console.log(this.error);
  }

  onCheckboxChange(eve: any) {
    this.isChecked = !this.isChecked;
    this.item.price = 0;
  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };

    this.item.location = event.latitude + ',' + event.longitude;
  }
}
