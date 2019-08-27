import { MessageBoardProxy } from './messageboard.proxy';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageBoardService {
  constructor(private messageBoardProxy: MessageBoardProxy){}

  writeMessage(message: string){
    if(message === null || message === ''){
      throw new Error('No message provided');
    }
    return this.messageBoardProxy.writeMessage(message).pipe(map((res) => res));
  }
}
