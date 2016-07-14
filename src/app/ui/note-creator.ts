import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';

@Component({
  selector: 'note-creator',
  styles: [`
    .note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
    .full {
      height: 100px;
    }
  `],
  directives: [
    ...FORM_DIRECTIVES
  ],
  template: `
    <div class="note-creator shadow-2">
      <form (ngSubmit)="onCreateNote()" class="row">
        <input
          type="text"
          (focus)="toggle(true)"
          [(ngModel)]="newNote.title"
          name="newNoteTitle"
          placeholder="Title"
          class="col-xs-10 title"
          *ngIf="fullForm"
        >
        <input
          type="text"
          (focus)="toggle(true)"
          [(ngModel)]="newNote.value"
          name="newNote"
          placeholder="Take a note..."
          class="col-xs-10"
        >
        <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
          <button
            type="submit"
            class="btn-light"
            *ngIf="fullForm"
           >
            Done
          </button>
        </div>
      </form>
    </div>
  `
})
export class NoteCreator {
  @Output() createNote = new EventEmitter();
  fullForm: boolean = false;
  newNote = {
    title: '',
    value: ''
  };

  onCreateNote() {
    const { title, value } = this.newNote;
    if (!title && !value) {
      this.reset();
      return;
    }

    this.createNote.next({ title, value });
    this.reset();
  }

  reset() {
    this.newNote = {
      title: '',
      value: ''
    };
    this.fullForm = false;
  }

  toggle(value: boolean) {
    this.fullForm = value;
  }
}
