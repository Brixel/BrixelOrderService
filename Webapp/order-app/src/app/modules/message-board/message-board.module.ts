import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteMessageComponent } from './components/write-message/write-message.component';
import { MatFormFieldModule, MatCheckboxModule, MatGridListModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatListModule, MatSelectModule, MatOptionModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MessageBoardRoutingModule } from './messageboard-routing.module';
import { MessageBoardService } from './shared/messageboard.service';
import { MessageBoardProxy } from './shared/messageboard.proxy';

@NgModule({
  declarations: [WriteMessageComponent],
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MessageBoardRoutingModule,
    MatCheckboxModule,
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatInputModule,
    CommonModule
  ],
  providers:[ MessageBoardService, MessageBoardProxy]
})
export class MessageBoardModule { }
