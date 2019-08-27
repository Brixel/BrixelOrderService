import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MessageBoardService } from '../../shared/messageboard.service';
import { MessageBoardFormGroup } from '../../messageboard.formgroup';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.scss']
})
export class WriteMessageComponent implements OnInit {
  amountOfCols = 1;
  constructor(private messageBoardService: MessageBoardService, private router: Router, private matSnackBar: MatSnackBar) {}

  messageBoardFormGroup: MessageBoardFormGroup;

  ngOnInit() {
    this.messageBoardFormGroup = new MessageBoardFormGroup();
  }

  back(){
    this.router.navigate(['../']);
  }

  request(){
    if(this.messageBoardFormGroup.valid){
      const messageValue = this.messageBoardFormGroup.getMessage();
      return this.messageBoardService.writeMessage(messageValue).subscribe((res) => {
        this.messageBoardFormGroup.clearMessage();
        this.matSnackBar.open(`Your message ${messageValue} has been sent to the wall`, null, {
          verticalPosition: 'top',
          duration: 2000
        });
      });
    }
  }

}
