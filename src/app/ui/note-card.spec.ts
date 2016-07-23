import {
  beforeEachProviders,
  inject,
  describe,
  expect,
  beforeEach,
  async,
  it
} from '@angular/core/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { NoteCard } from './note-card';

@Component({
  selector: 'note-card-test',
  directives: [
    NoteCard
  ],
  template: '<note-card [note]="note"></note-card>'
})
class TestComponent {
  note = {
    id: 1,
    title: 'Grocery list',
    value: 'get apples and pairs and stuff',
    color: 'blue'
  }
}

describe('NoteCard', () => {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    builder = tcb;
  }));

  it('should display the correct title', async(() => (
    builder.createAsync(TestComponent)
    .then((fixture: ComponentFixture<TestComponent>) => {
      const title = fixture.nativeElement.querySelector('.title');
      fixture.detectChanges();

      expect(title.textContent.trim()).toEqual('Grocery list');
    })
  )));

  it('should toggle checkmark', async(() => (
    builder.createAsync(TestComponent)
    .then((fixture: ComponentFixture<TestComponent>) => {
      const noteCard = fixture.nativeElement.querySelector('.note-card');
      fixture.detectChanges();

      const evObj = document.createEvent('MouseEvents');
      evObj.initEvent('mouseenter', true, false);
      noteCard.dispatchEvent(evObj);
      fixture.detectChanges();

      let check = noteCard.querySelector('.icon');
      expect(check).toBeTruthy();

      evObj.initEvent('mouseleave', true, false);
      noteCard.dispatchEvent(evObj);
      fixture.detectChanges();

      check = noteCard.querySelector('.icon');
      expect(check).toBeNull();
    })
  )))
});
