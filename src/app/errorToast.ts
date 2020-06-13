import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorToast {

  constructor(private toastr: ToastrService) { }

  showSuccess(msg: string) {
    this.toastr.success('خطل', msg);
  }
}
