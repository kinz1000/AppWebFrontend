import { Injectable, OnInit } from '@angular/core';
import { Client, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { BehaviorSubject } from 'rxjs';
import { ChatMessage } from '../modelos/chat-message';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChatServicioService {
 
  
  private stompClient: any;
constructor(){
this.initConnectionSocket();
}



initConnectionSocket(){


  
  const url = 'ws//localhost:8080/chat-socket';
  const socket = new SockJS(url);
  this.stompClient = Stomp.over(socket);

  // Intentar conectarse y agregar log en caso de éxito o error
  this.stompClient.connect({}, () => {
    console.log('Conexión establecida con éxito a WebSocket');
  }, (error: any) => {
    console.log('Error al intentar conectar a WebSocket: ', error);
  });
}


joinRoom(roomid: string){
  this.stompClient.connect({},()=>{
this.stompClient.subscribe(`/topic/${roomid}`,(messages:any)=>{
  const messageContent = JSON.parse(messages.body);
  console.log(messageContent);
})


  })
}

sendMessage(roomid:string,chatmessage: ChatMessage){


this.stompClient.send(`/app/chat${roomid}`,JSON.stringify(chatmessage));

}

}










