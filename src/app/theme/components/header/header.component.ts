import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { State } from 'src/app/models/state/state.module';
import { AuthorizeService } from 'src/app/services/other/authorize.service';
import { StateService } from 'src/app/services/state.service';
import { ErrorToast } from 'src/app/errorToast';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryWithSub } from 'src/app/models/category/category.module';
import { StateCheckService } from 'src/app/services/other/stateCheck.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  loading = false;
  error = null;
  isAuth = false;
  isShow = false;
  txt: string;
  states: State[] = null;
  tempStates: State[] = null;
  mainStates: State[] = null;
  cats: CategoryWithSub[] = [];

  constructor(private errorToast: ErrorToast, private authorizeService: AuthorizeService, private dataCatService: CategoryService,
    private dataStateService: StateService, private stateCheckService: StateCheckService, private router: Router) {
    this.updateCode();
  }

  ngOnInit() {

    if (this.authorizeService.isAuthorize()) {
      this.isAuth = true;
    }

    this.loading = true;

    this.dataStateService.getSubState().subscribe(
      results => {
        if (results.isSuccess) {
          this.states = results.data;
          this.tempStates = this.states;
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

    this.dataStateService.getMainState().subscribe(
      results => {
        if (results.isSuccess) {
          this.mainStates = results.data;
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

    this.dataCatService.getCategoryWithSub().subscribe(
      results => {
        if (results.isSuccess) {
          this.cats = results.data;
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

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });

  }

  logOut() {
    this.authorizeService.logout();
    this.router.navigate(['/']);
  }

  onSearch() {
    this.router.navigate(['/pages/main/search', this.txt]);
  }

  onSearchState(stateName: string) {
    if (stateName !== '') {
      this.tempStates = this.states.filter(a => a.name.includes(stateName));
    } else {
      this.tempStates = this.states;
    }
  }

  onStateClick(id: number) {
    this.stateCheckService.storeState(id.toString());

    window.location.reload();
  }

  onSubStateClick(id: number) {
    this.stateCheckService.storeSubState(id.toString());

    window.location.reload();
  }

  onAllStateClick() {
    this.stateCheckService.removeSate();

    window.location.reload();
  }

  updateCode() {
    if (this.authorizeService.isAuthorize()) {
      this.isAuth = true;
    }
  }
}
