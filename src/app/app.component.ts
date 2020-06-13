import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AnalyticsService, SeoService } from './core/utils';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private router: Router, private analytics: AnalyticsService, private seoService: SeoService) {
  }

  staticJs = [
    'jquery-1.12.4.min.js', 'leaflet.js', 'leaflet-mapbox-gl.js',
    'leaflet-search.js', 'mapbox-gl.js', 'slick.min.js', 'jquery.fancybox.min.js',
    'theme.js', 'jQuery.MultiFile.min.js', 'jquery-validate.bootstrap-tooltip.min.js'];

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        for (const i of this.staticJs) {

          if (document.getElementById(i) != null) {
            document.getElementById(i).remove();
          }

          this.loadScript(i);
        }
      }
    });
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle('سایت | ' + newTitle);
  }

  public loadScript(url: string) {
    const node = document.createElement('script');
    node.src = '/assets/js/' + url;
    node.id = url;
    node.async = false;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
