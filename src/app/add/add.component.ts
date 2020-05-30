import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PostCreate, Post } from 'src/models/post/post.module';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-theme-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  loading = false;
  error = null;
  source: Post = null;
  submitted = false;
  isChecked = false;
  item: PostCreate = {
    categoryId: 0, images: null, location: null,
    phone: null, price: 0, stateId: 0, tags: null, title: null
  };

  constructor(public translate: TranslateService, private dataService: PostService) {
    translate.addLangs(['en', 'fa']);
  }

  ngOnInit(): void {

  }

  onAdd(): void {
    this.submitted = true;
    this.loading = true;
    this.dataService.create(this.item).subscribe(
      results => {
        this.source = results.data;
        this.loading = false;
        console.log(results);
        console.log(this.source);
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
  }
}
