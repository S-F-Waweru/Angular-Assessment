import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomMessageComponent } from './random-message/random-message.component';
import { SpinningGameComponent } from './spinning-game/spinning-game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RandomMessageComponent, SpinningGameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularAssessment';
}
