import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriteMessageComponent } from './components/write-message/write-message.component';

const routes: Routes = [
  {path: '',
component: WriteMessageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class MessageBoardRoutingModule { }
