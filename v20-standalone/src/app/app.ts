import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IcSideNavigation, IcNavigationItem } from '@ukic/angular-community-supported/standalone';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IcSideNavigation, IcNavigationItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly status = 'Ng v20 - Standalone'
  protected readonly version = '3.17.0'
}
