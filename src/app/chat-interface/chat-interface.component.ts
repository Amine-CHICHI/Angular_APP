import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.scss'],
})
export class ChatInterfaceComponent implements OnInit {
  commentaires: { name?: string; date?: Date; message?: string }[] = [
    { name: 'testname', date: new Date(), message: 'testmessage' },
  ];
  infos = {
    name: 'med',
    email: 'med@gmail.com',
    tel: '0622254896',
  };

  message: string = '';
  constructor() {}

  ngOnInit(): void {}

  addComment(commentForm: NgForm) {
    const comment = {
      name: 'nameTest',
      date: new Date(),
      message: commentForm.value.message,
    };

    this.commentaires.push(comment);
    commentForm.reset();
  }

  deleteAll() {
    this.commentaires = [];
    this.message = '';
    console.log(this.commentaires);
  }
}
