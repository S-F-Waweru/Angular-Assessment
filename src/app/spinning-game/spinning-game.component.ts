import { Component, OnInit } from '@angular/core';
import { SpinningGameService } from '../Services/spinning-game.service';

@Component({
  selector: 'app-spinning-game',
  standalone: true,
  imports: [],
  templateUrl: './spinning-game.component.html',
  styleUrl: './spinning-game.component.css'
})
export class SpinningGameComponent  implements OnInit{

  constructor(private sgs : SpinningGameService){}

  tries:number = 0
  prize = ""
  prizes:string[] = []
  ngOnInit(): void {
    this.prize = this.sgs.getPrize()
   this.tries = this.sgs.getTries()
   this.prizes = this.sgs.getPrizes()
  }

  spin(){
    this.sgs.spin()
    this.tries =  this.sgs.getTries()
    this.prize = this.sgs.getPrize()
  }

  resetSpin(){
    this.sgs.resetSpin()
    this.tries =  this.sgs.getTries()

  }
 
}
