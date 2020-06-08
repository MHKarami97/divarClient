import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  staticJs = [
    'vendor/jquery-1.12.4.min.js', 'vendor/modernizr-3.6.0.min.js',
    'ajax-contact.js', 'bootstrap.min.js',
    'jquery-ui.min.js', 'jquery.magnific-popup.min.js',
    'jquery.nice-select.min.js', 'map-script.js',
    'menu_horizontal.js', 'slick.min.js',
    'validator.min.js',
    'popper.min.js',
    'main.js'];

  constructor(private titleService: Title, private router: Router) {
  }

  ngOnInit() {
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
    document.getElementsByTagName('body')[0].appendChild(node);
  }
}
