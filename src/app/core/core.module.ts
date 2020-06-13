import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
} from './utils';

const socialLinks = [
  {
    url: 'https://github.com/mhkarami97',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/mhkarami97',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/mhkarami97',
    target: '_blank',
    icon: 'twitter',
  },
];

export const NB_CORE_PROVIDERS = [
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [

  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
