import { Component } from '@angular/core';
import { NoteCard, NoteCreator } from '../ui';
import { NotesService } from '../services';


@Component({
  selector: 'notes-container',
  directives: [
    NoteCard,
    NoteCreator
  ],
  styles: [`
    .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
    }
  `],
  template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNote)="onCreateNote($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
            *ngFor="let note of notes; let i = index"
            (checked)="onNoteChecked($event)"
          >
          </note-card>
        </div>
      </div>
    </div>
  `
})
export class Notes {
  notes = [
    {title: 'Chores', value: 'Don\'t forget to clean up', color: 'lighblue'},
    {title: 'Food', value: 'meal prep tonight please!', color: 'seagreen'},
    {title: 'Shipping Number', value: '#234654hhd88', color: 'pink'}
  ];

  constructor(private noteService: NotesService) {
    this.noteService.getNotes()
    .subscribe(res => this.notes = res.data);
  }

  onCreateNote(note) {
    this.noteService.createNote(note)
    .subscribe(note => this.notes.push(note));
  }

  onNoteChecked(note) {
    this.noteService.completeNote(note)
    .subscribe(note => {
      const i = this.notes.findIndex(localNote => localNote.id === note.id);
      this.notes.splice(i, 1);
    });
  }
}
