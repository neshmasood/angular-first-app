import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MediaItemService } from './media-item.service';
import { lookupListToken } from './providers';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists) {
    this.form = this.formBuilder.group({
        medium: this.formBuilder.control('Movies'),
        name: this.formBuilder.control('', Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        category: this.formBuilder.control(''),
        year: this.formBuilder.control(''),
        
      });
  }
  
  ngOnInit(){}


  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem);
  }
}