import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AnalyticsService, SeoService } from './core/utils';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private analytics: AnalyticsService, private seoService: SeoService) {
  }

  staticJs = [
    'jquery-1.12.4.min.js', 'leaflet.js', 'bootstrap.min.js', 'leaflet-mapbox-gl.js',
    'leaflet-search.js', 'mapbox-gl.js', 'slick.min.js', 'jquery.fancybox.min.js',
    'theme.js', 'persian_numberc.js', 'jQuery.MultiFile.min.js', 'jquery-validate.bootstrap-tooltip.min.js'];

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();

    for (const i of this.staticJs) {
      this.loadScript('/assets/js/' + i);
    }
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle('سایت | ' + newTitle);
  }

  public loadScript(url: string) {
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('header')[0].appendChild(node);
  }
}
