import { Component } from '@angular/core';
import { NoteCreator } from '../ui';

@Component({
  selector: 'notes-container',
  directives: [
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
    </div>
  `
})
export class Notes {
  notes = []

  onCreateNote(note) {
    this.notes.push(note);
  }
}
