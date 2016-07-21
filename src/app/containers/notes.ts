import { Component } from '@angular/core';
import { NoteCard } from '../ui';

@Component({
  selector: 'notes-container',
  directives: [
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
        note creator here
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
  notes = [
    {title: 'Chores', value: 'Don\'t forget to clean up', color: 'lighblue'},
    {title: 'Homework', value: 'read pages 34-67', color: 'seagreen'},
    {title: 'Gym', value: 'squats & presses today', color: 'pink'}
  ]

  onNoteChecked(i) {
    this.notes.splice(i, 1);
  }
}
