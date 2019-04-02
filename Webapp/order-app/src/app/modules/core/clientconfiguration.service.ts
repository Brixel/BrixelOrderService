import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClientConfiguration } from './model';

@Injectable()
export class ClientConfigurationService {
    private currentClientConfigurationSubject = new BehaviorSubject<ClientConfiguration>(<ClientConfiguration>{});

    constructor(private httpClient: HttpClient) {}

    private setClientConfiguration(clientConfiguration: ClientConfiguration) {
        this.currentClientConfigurationSubject.next(clientConfiguration);
    }

    load(): Observable<ClientConfiguration> {
        return this.httpClient.get<ClientConfiguration>('/assets/config.json').pipe(
            map((config) => {
                const clientConfiguration = <ClientConfiguration>{
                    apiUri: config.apiUri,
                    features: config.features
                };
                this.setClientConfiguration(clientConfiguration);
                return this.getClientConfiguration();
            })
        );
    }

    getClientConfiguration(): ClientConfiguration {
        return this.currentClientConfigurationSubject.value;
    }
}
