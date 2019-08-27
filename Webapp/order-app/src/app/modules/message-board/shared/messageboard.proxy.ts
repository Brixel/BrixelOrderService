import { ApiService } from '../../core/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageBoardProxy{

  constructor(private apiService: ApiService) { }

  writeMessage(message: string): Observable<boolean> {
    return this.apiService.post('/api/messageboard/write', message).pipe(map((res) => res));
  }
}
