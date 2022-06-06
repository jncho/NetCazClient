import {notes} from './Notes';

export class Line {
    line: number;
    type: string;
    content: string;

    constructor(line: any){
        this.line = line.line;
        this.type = line.type;
        this.content = line.content;
    }

    updateSemitones(semitones: number){
        if (this.type === 'acorde'){
            const validEntries = Object
                .values(notes)
                .reduce( (x,y) => x.concat(y))
                .sort((x,y) => y.length - x.length)
                .join('|');

            const regex = new RegExp(`(${validEntries})`,'g');
            this.content = this.content.replace(regex, x => {
                const isMayor = x.toUpperCase() === x;
                const indexStr = Object.keys(notes).find(y =>  notes[y].includes(x.toLowerCase()));
                let index = parseInt(indexStr, 10);
                index += semitones;
                index = index < 0 ? Object.keys(notes).length+index : index%Object.keys(notes).length;
                return isMayor ? notes[index][0].toUpperCase() : notes[index][0];
            });

        }
    }
}
