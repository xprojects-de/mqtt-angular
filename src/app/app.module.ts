import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MqttModule, IMqttServiceOptions } from 'ngx-mqtt';

const useSSL = false;

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'localhost',
  port: 8000,
  protocol: 'ws',
  path: '/mqtt',
  username: 'admin-user',
  password: 'admin-password'
}

/**
 * Just working if the Browser accept the self-signed server.cert!
 */
export const MQTT_SERVICE_OPTIONS_TLS: IMqttServiceOptions = {
  hostname: 'localhost',
  port: 8001,
  path: '/mqtt',
  protocol: 'wss',
  username: 'admin-user',
  password: 'admin-password',
  rejectUnauthorized: false
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MqttModule.forRoot((useSSL ? MQTT_SERVICE_OPTIONS_TLS : MQTT_SERVICE_OPTIONS))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
