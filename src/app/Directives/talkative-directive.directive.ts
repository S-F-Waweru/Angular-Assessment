import { Directive, Host, HostBinding, HostListener, OnInit } from '@angular/core';
import { MessageServiceService } from '../Services/message-service.service';

@Directive({
  selector: '[appTalkativeDirective]',
  standalone: true
})
export class TalkativeDirectiveDirective implements OnInit {

  constructor(private ms : MessageServiceService) { }

  @HostBinding('textContent') message = 'The text'

  ngOnInit(): void {
     this.message = "Click Me"
  }
 

  @HostListener('click') mouseClick() {
      console.log('clicked!!')
      this.message = this.ms.randomMessage()
  }


}
