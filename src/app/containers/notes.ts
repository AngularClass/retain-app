import { Component } from '@angular/core';
import { NoteCreator, NoteCard } from '../ui';

@Component({
  selector: 'notes-container',
  directives: [
    NoteCreator,
    NoteCard
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
            *ngFor="let note of notes; let i = index;"
            [note]="note"
            (checked)="onNoteChecked(i)"
          >
          </note-card>
        </div>
      </div>
    </div>
  `
})
export class Notes {
  notes = []

  onCreateNote(note) {
    this.notes.push(note);
  }

  onNoteChecked(i) {
    this.notes.splice(i);
  }
}
