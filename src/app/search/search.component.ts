import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  txt: string;
  constructor(public router: Router, public translate: TranslateService) {
    translate.addLangs(['en', 'fa']);
  }

  onAdd() {
    this.router.navigate(['/find', this.txt]);
  }
}
