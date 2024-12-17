import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatServicioService } from '../../Servicios/chat-servicio.service';
import { ChatMessage } from '../../modelos/chat-message';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule


@Component({
  selector: 'app-chat',
  imports: [CommonModule,NgClass, FormsModule   ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit{

  messageInput: string = '';
  userId: string="user1";
  messageList: any[] = [];

  constructor(private cS: ChatServicioService,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    
    this.cS.joinRoom("ABC");
    
  }

  sendMessage() {
    const cMessage ={
      message:"hola que tal",
      user:"user3"
    }as ChatMessage


    this.cS.sendMessage("ABC",cMessage);
  }

  lisenerMessage() {
   
   //this.chatService.getMessageSubject().subscribe((messages: any) => {
     // this.messageList = messages.map((item: any)=> ({
     //   ...item,
     //   message_side: item.user === this.userId ? 'sender': 'receiver'
     // }))
   // }); 
    
  }
}


