import { Component } from '@angular/core';

@Component({
    selector: 'notes-container',
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
                <note-creator></note-creator>
            </div>
            <div class="notes col-xs-8">
                <div class="row between-xs">
                    <note-card class="col-xs-4"
                               [note]="note"
                               *ngFor="let note of notes; let i = index"
                               (checked)="onNoteChecked(i)"
                    ></note-card>
                </div>
            </div>
        </div>
    `
})
export class NotesContainer {
    notes = [
        {
            title: 'Chores',
            value: 'Don\'t forget to clean up the flat',
            color: '#82CAFF'
        },
        {
            title: 'Cook',
            value: 'Don\'t forget to cook a cake to milonga',
            color: 'lightgreen'
        },
        {
            title: 'Doggy',
            value: 'Don\'t forget to go for walk with dog',
            color: 'lightcoral'
        }
    ];
    onNoteChecked(i: number) {
        this.notes.splice(i, 1);
    }
};
