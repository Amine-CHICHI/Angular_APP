import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable()
export class AboutService {
  constructor() {}

  commentaires: any[] = [];
  infos = {
    name: 'med',
    email: 'med@gmail.com',
    tel: '0622254896',
  };

  getInfos() {
    return this.infos;
  }

  getAllComments() {
    return this.commentaires;
  }

  addComment(commentForm: NgForm) {
    commentForm.value.date = new Date();
    commentForm.value.name = 'Amine';

    this.commentaires.push(commentForm.value);
    commentForm.reset();
  }

  deleteAllComments() {
    this.commentaires = [];
  }
}
