import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SongsPage } from './songs.page';

import { SongsPageRoutingModule } from './songs-routing.module';
import { NetCazLayerService } from '../services/net-caz-layer.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SongsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [SongsPage],
  providers: [NetCazLayerService]
})
export class SongsPageModule {}
