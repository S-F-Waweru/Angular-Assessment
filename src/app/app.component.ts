import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomMessageComponent } from './random-message/random-message.component';
import { SpinningGameComponent } from './spinning-game/spinning-game.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RandomMessageComponent, SpinningGameComponent, PlaceHolderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularAssessment';
}
