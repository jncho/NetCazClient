import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageServiceService } from './services/storage-service.service';


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, StorageServiceService],
    bootstrap: [AppComponent]
})
export class AppModule {}
