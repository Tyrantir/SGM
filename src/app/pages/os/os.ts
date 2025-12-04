import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ListOs } from '../../_components/list-os/list-os';

@Component({
  selector: 'app-os',
  imports: [SecondaryButton, ListOs],
  templateUrl: './os.html',
  styleUrl: './os.css',
})
export class OS {

}
