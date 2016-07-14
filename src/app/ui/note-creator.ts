import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { ColorPicker } from './color-picker';

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
    ...FORM_DIRECTIVES,
    ColorPicker
  ],
  template: `
    <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
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
          <div class="col-xs-3">
            <color-picker
              (selected)="onColorSelect($event)"
              [colors]="colors"
            >
            </color-picker>
          </div>
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
  colors: Array<string> = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', 'white'];
  fullForm: boolean = false;
  newNote = {
    title: '',
    value: '',
    color: 'white'
  };

  onCreateNote() {
    const { title, value, color } = this.newNote;
    if (!title && !value) {
      this.reset();
      return;
    }

    this.createNote.next({ title, value, color });
    this.reset();
  }

  reset() {
    this.newNote = {
      title: '',
      value: '',
      color: 'white'
    };
    this.fullForm = false;
  }

  toggle(value: boolean) {
    this.fullForm = value;
  }

  onColorSelect(color: string) {
    this.newNote.color = color;
  }
}
