import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
    // @Input() is a media decorator, we can use this to get data to the component written after it in this case mediaItem. Property name is mediaItem which comes from app-media-item component.
    @Input() mediaItem;


    onDelete(){
        console.log('deleted')
    }
}