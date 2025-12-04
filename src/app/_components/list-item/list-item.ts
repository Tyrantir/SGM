import { Component } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';

@Component({
  selector: 'app-list-item',
  imports: [SecondaryButton],
  templateUrl: './list-item.html',
  styleUrl: './list-item.css',
})
export class ListItem {

}
