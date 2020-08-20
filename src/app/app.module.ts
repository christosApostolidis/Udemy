import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormStyle } from '@angular/common';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { VaggelisComponent } from './vaggelis/vaggelis.component';
import { MariaComponent } from './maria/maria.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    VaggelisComponent,
    MariaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
