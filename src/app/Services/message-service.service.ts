import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }
  messeges:string[] = [
    'Hello word!!',
    'Thats rough buddy',
    'You should go out more',
    'Angular is awesome',
    'I am a backend developer ' ,
    'Teach2give Rocks!!',
    'Hello Again!'
  ]

  randomMessage():string{
    const random = Math.floor(Math.random() * this.messeges.length)
    const randomMessage = this.messeges[random]
    return randomMessage
  }
}
