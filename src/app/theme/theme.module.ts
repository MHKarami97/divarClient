import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FooterComponent,
  HeaderComponent,
} from './components';

import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
} from './pipes';

import {
  FirstLayoutComponent,
} from './layouts';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  FirstLayoutComponent,
];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule
  ],
  exports: [CommonModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [

      ],
    };
  }
}
