import { ApiService } from '../../core/api.service';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { SpaceAPILog } from './spaceapi.model';
import { Observable } from 'rxjs';

@Injectable()
export class SpaceApiProxy {
  baseUri: string;
  
  constructor(private apiService: ApiService) { }

  getCurrentState() : Observable<SpaceAPILog>{
      return this.apiService.get('/api/spaceapi/status').pipe(map((res) => res));
  }
}