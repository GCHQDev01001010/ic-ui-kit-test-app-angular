import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IcNavigationItem, IcSearchBar, IcTopNavigation } from '@ukic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IcTopNavigation, IcNavigationItem, IcSearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Standalone - Ng v21');
  protected readonly version = signal('v13.16.0');
}
