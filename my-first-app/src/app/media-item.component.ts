import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
    // @Input() is a media decorator, we can use this to get data to the component written after it in this case mediaItem. Property name is mediaItem which comes from mw-media-item component.
    @Input() mediaItem;
    @Output() delete = new EventEmitter();


    onDelete(){
        console.log('deleted')
        // this method expects to be caled with an arguement taht represents data we can send back. if there is no data to send back, we can call this event null. But its helpful to have our delet event return back what was requested to delete. We put the mediaItem class componnet in teh parameters
        this.delete.emit(this.mediaItem);
    }
}