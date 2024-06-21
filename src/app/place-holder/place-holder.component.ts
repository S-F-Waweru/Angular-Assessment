import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlaceholderPipePipe } from '../Pipes/placeholder-pipe.pipe';

@Component({
  selector: 'app-place-holder',
  standalone: true,
  imports: [CommonModule, FormsModule, PlaceholderPipePipe],
  templateUrl: './place-holder.component.html',
  styleUrl: './place-holder.component.css'
})
export class PlaceHolderComponent {
  input = ''
  inputlength = this.input.length

}
