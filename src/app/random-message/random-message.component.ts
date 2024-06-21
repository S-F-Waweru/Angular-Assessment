import { Component } from '@angular/core';
import { TalkativeDirectiveDirective } from '../Directives/talkative-directive.directive';

@Component({
  selector: 'app-random-message',
  standalone: true,
  imports: [TalkativeDirectiveDirective],
  templateUrl: './random-message.component.html',
  styleUrl: './random-message.component.css'
})
export class RandomMessageComponent {

}
