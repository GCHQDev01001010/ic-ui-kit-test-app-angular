import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly testType = 'Ng v21 - Module-based'
  protected readonly version = '3.16.0'
}
