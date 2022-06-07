import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { NetCazLayerService } from 'src/app/services/net-caz-layer.service';
import { Song } from 'src/app/services/dto/Song';

@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.scss'],
})
export class SongPage implements OnInit {

  id: string;
  song: Song;
  semitones: number;

  showFabList = false;
  fontSizePixel = 15;
  fontSize = `font-size: ${this.fontSizePixel}px`;

  constructor(private route: ActivatedRoute,private service: NetCazLayerService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.service.getSong(this.id).subscribe(song =>{
      this.song = new Song(song);
    });
  }

  updateTone(event, semitones: number){
    this.song.updateSemitones(semitones);
    event.stopPropagation();
  }

  resize(event,incrementPixel){
    event.stopPropagation();
    this.fontSizePixel += incrementPixel;
    this.fontSize = `font-size: ${this.fontSizePixel}px`;
  }

}
