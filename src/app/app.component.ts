import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {

  staticJs = [
    'vendor/jquery-1.12.4.min.js', 'vendor/modernizr-3.6.0.min.js',
    'ajax-contact.js', 'bootstrap.min.js',
    'jquery-ui.min', 'jquery.magnific-popup.min.js',
    'jquery.nice-select.min.js', 'map-script.js',
    'menu_horizontal.js', 'slick.min.js',
    'validator.min.js', 'main.js',
    'popper.min.js'];

  constructor(private titleService: Title) {
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
    document.getElementsByTagName('body')[0].appendChild(node);
  }
}
