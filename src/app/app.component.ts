import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Message } from './interfaces/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  topicname: any = 'topic/test';
  msg: any;
  isConnected: boolean = false;
  @ViewChild('msglog', { static: true }) msglog: ElementRef;

  constructor(private _mqttService: MqttService) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  subscribeNewTopic(): void {
    this.subscription = this._mqttService.observe(this.topicname).subscribe((message: IMqttMessage) => {
      //console.log(message);
      this.logMsg('Message: ' + message.payload.toString() + ' for topic: ' + message.topic);
      const m: Message = JSON.parse(message.payload.toString());
      console.log(m);
    });
  }

  sendmsg(): void {
    // use unsafe publish for non-ssl websockets
    const m: Message = { error: false, msg: this.msg };
    this._mqttService.unsafePublish(this.topicname, JSON.stringify(m), { qos: 1, retain: true });
    this.msg = '';
  }

  logMsg(message): void {
    //this.msglog.nativeElement.innerHTML += '<br><hr>' + message;
    this.msglog.nativeElement.innerHTML = message;
  }

  clear(): void {
    this.msglog.nativeElement.innerHTML = '';
  }
}