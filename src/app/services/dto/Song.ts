import { ObjectId } from 'mongodb';
import { Line } from './Line';

export class Song {
    _id: ObjectId;
    title: string;
    section: string;
    body: Line[];

    constructor(song: any){
        // eslint-disable-next-line no-underscore-dangle
        this._id = song._id;
        this.title = song.title;
        this.section = song.section;
        this.body = [];
        for (const line of song.body){
            this.body.push(new Line(line));
        }
    }

    public updateSemitones(semitones: number){
        for (const line of this.body){
            line.updateSemitones(semitones);
        }
    }

}
