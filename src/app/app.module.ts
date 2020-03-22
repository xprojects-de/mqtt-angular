import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MqttModule, IMqttServiceOptions } from 'ngx-mqtt';

//const KEY = './Users/xprojects/Documents/Github/mqtt-java/MQTT-Java/hivemq/certs/mqtt-client-key.pem';
//const CERT = './Users/xprojects/Documents/Github/mqtt-java/MQTT-Java/hivemq/certs/mqtt-client-cert.pem';
//const CA = './Users/xprojects/Documents/Github/mqtt-java/MQTT-Java/hivemq/certs/server.pem';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'localhost',
  port: 8000,
  protocol: 'ws',
  path: '/mqtt'
}
/*export const MQTT_SERVICE_OPTIONS_TLS: IMqttServiceOptions = {
  hostname: 'localhost',
  port: 8001,
  path: '/mqtt',
  protocol: 'wss',
  ca: CA,
  cert: CERT,
  key: KEY,
  rejectUnauthorized: false
}*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
