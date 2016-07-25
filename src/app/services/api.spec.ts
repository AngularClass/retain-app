import {
  inject,
  async,
  addProviders
} from '@angular/core/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ApiService } from './api';

describe('ApiSerivce', () => {
  let apiSerivce: ApiService;
  let mockbackend: MockBackend;

  beforeEach(() => addProviders([
    BaseRequestOptions,
    MockBackend,
    {
      provide: Http,
      useFactory: (backend, options) => new Http(backend, options),
      deps: [MockBackend, BaseRequestOptions]
    },
    ApiService
  ]));

  beforeEach(inject([ApiService, MockBackend], (service, mock) => {
    apiSerivce = service;
    mockbackend = mock;
  }));

  it('should make get request', async(() => {
     let connection;
     let response = {notes: [1, 2, 3]};

     mockbackend.connections.subscribe(connection => {
       connection.mockRespond(new Response(
         new ResponseOptions({body: JSON.stringify(response), status: 200})
       ));
     });

     apiSerivce.get('/notes')
     .subscribe(notes => {
       expect(notes).toEqual(response);
     });
  }));

  it('should make post request', async(() => {
     let connection;
     let response = {note: {value: 'note'}};

     mockbackend.connections.subscribe(connection => {
       connection.mockRespond(new Response(
         new ResponseOptions({body: JSON.stringify(response), status: 201})
       ));
     });

     apiSerivce.post('/notes', response)
     .subscribe(note => {
       expect(note).toEqual(response);
     });
  }));
});
