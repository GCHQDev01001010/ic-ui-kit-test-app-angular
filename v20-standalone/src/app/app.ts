import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IcSideNavigation } from '@ukic/angular/dist/standalone';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IcSideNavigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly status = 'Ng v20 - Module-based'
  protected readonly version = '3.15.0'
}
