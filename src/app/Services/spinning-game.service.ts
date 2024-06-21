import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinningGameService {

  constructor() { }
  tries = 3
  prize = ''
  prizes:string[] = [
    'Ball',
    'Chair',
    '200 Ksh',
    '500 Ksh',
    'Try Again',
    'Gift Coupon',
    'TouthBrush',
    '500,000 Ksh',
    '2 Ksh',
    '4 Ksh',
    '6 Ksh',
    '8 Ksh',
    '10 Ksh', 
    '12 Ksh',
    '1,200,000 Ksh'
  ]

  spin(){
    if(this.tries <= 0){
      return "Your tries are 0)"
    }
    const random = Math.floor(Math.random() * this.prizes.length)
    this.prize = this.prizes[random]
    this.tries = this.tries - 1
    if(this.prize === 'Try Again'){
      this.tries + 1
      return "You won A Bonous Chance!!"
    }

    return this.prize
  }


  getPrize(){
    return this.prize
  }
  
  getPrizes(){
    return this.prizes
  }
  getTries(){
    return this.tries
  }

  resetSpin(){
    return this.tries = 3
  }




}
