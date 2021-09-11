import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.scss']
})
export class ChatInterfaceComponent implements OnInit {

  commentaires:{name?:string, date?:Date, message?:string}[] = [
    
  ]
  

  message:string = ""
  constructor() { }

  ngOnInit(): void {
  }

  addComment(){
    if (this.message === ""){
      alert("enter a comment")
    }else{
      const commentaire={
        name:'nameTest',
        date:new Date(),
        message:this.message
      };
    
      this.commentaires.push(commentaire);
      this.message = ""
      console.log(this.commentaires)
    }
  }
  deleteAll(){
    this.commentaires = []
  }

}
