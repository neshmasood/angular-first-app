import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {
  mediaItem = [ 
    {
        id: 1,
        name: 'Firebug',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: null,
        isFavorite: false
  }, 
  {
    id: 2,
    name: 'The Small Tall',
    medium: 'Movies',
    category: 'Comedy',
    year: 2015,
    watchedOn: null,
    isFavorite: true
  },

];






}