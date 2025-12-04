import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { ListItem } from './_components/list-item/list-item';
import { UiBase } from './_components/ui-base/ui-base';
import { OS } from './pages/os/os';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ListItem, UiBase, OS],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sgm');
}
