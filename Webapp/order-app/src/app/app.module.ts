import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { MatToolbarModule, MatSnackBarModule, MatButtonModule, MatDividerModule, MatSidenavModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './modules/core/core.module';
import { ClientConfigurationService } from './modules/core/clientconfiguration.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDividerModule,
    MatSidenavModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    {
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [ClientConfigurationService],
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initializeApp(clientConfigurationService: ClientConfigurationService) {
  return () => {
      return clientConfigurationService
          .load()
          .subscribe(
              (result) => { },
              (error) => {
                  alert('Failed to initialize application');
              }
          );
  };
}
