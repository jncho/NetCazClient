import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NetCazLayerService } from '../services/net-caz-layer.service';
import { StorageServiceService } from '../services/storage-service.service';

@Component({
  selector: 'app-songs',
  templateUrl: 'songs.page.html',
  styleUrls: ['songs.page.scss']
})
export class SongsPage implements OnInit {
  @ViewChild('searchBar') searchBar;

  private songs: any[];

  constructor(private service: NetCazLayerService, private storageService: StorageServiceService) {}

  async ngOnInit() {
    console.log('OnInit');
    this.songs = [];
    this.songs = await this.getSongs();
  }

  async getSongs() {
    return await this.storageService.get('songsList');
  }

  async search(event){
    const input = await this.searchBar.getInputElement();
    this.service.getSongs(input.value).subscribe(async songs => {
      await this.storageService.set('songsList',songs);
      this.songs = songs;
    });
  }

}
